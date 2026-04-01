"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight, CheckCircle, Calendar, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "./StepIndicator";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { locations } from "@/data/locations";
import { useBookingWizard } from "@/hooks/useBookingWizard";

// Time slots mock: different availability by day
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "13:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00",
];
const UNAVAILABLE = ["11:00", "14:00", "16:30"];

const detailsSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required"),
  dob: z.string().min(1, "Required"),
  reason: z.enum(["eye-test", "frame-selection", "contact-lens-fitting", "collection", "other"]),
  notes: z.string().optional(),
  agreeToPrivacy: z.literal(true, { message: "Please accept the privacy policy" }),
});

type DetailsForm = z.infer<typeof detailsSchema>;

function getWeekDays(offset = 0): { date: Date; label: string; dayName: string }[] {
  const today = new Date();
  today.setDate(today.getDate() + offset);
  // Start from today, show 7 days
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return {
      date: d,
      label: d.toLocaleDateString("en-MU", { day: "numeric", month: "short" }),
      dayName: d.toLocaleDateString("en-MU", { weekday: "short" }),
    };
  });
}

export default function BookingWizard() {
  const { step, data, next, back, reset } = useBookingWizard();
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingRef] = useState(
    () => "JP-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const weekDays = getWeekDays(weekOffset * 7);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsForm>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { reason: "eye-test" },
  });

  const slideVariants = {
    enter: { x: 30, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 },
  };

  return (
    <div className="min-h-[60vh] bg-brand-surface py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-3">
            Online Booking
          </p>
          <h1 className="text-4xl font-heading font-bold uppercase text-brand-dark tracking-tight">
            Book an Appointment
          </h1>
          <p className="text-brand-muted mt-3 text-sm">
            Book a free eye test at any of our 5 branches. An SMS confirmation
            will be sent once your appointment is confirmed.
          </p>
        </div>

        <StepIndicator current={step} />

        <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Location */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-8"
              >
                <h2 className="font-heading font-bold uppercase text-brand-dark tracking-wide text-lg mb-6">
                  Choose a Branch
                </h2>
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => next({ locationId: loc.id })}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all hover:border-brand-primary group ${
                        data.locationId === loc.id
                          ? "border-brand-primary bg-brand-primary/5"
                          : "border-brand-border"
                      }`}
                    >
                      <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={loc.imageUrl}
                          alt={loc.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm group-hover:text-brand-primary transition-colors">
                          {loc.name}
                          {loc.mall && (
                            <span className="font-normal normal-case text-brand-muted">
                              {" "}· {loc.mall}
                            </span>
                          )}
                        </p>
                        <div className="flex items-start gap-1 mt-1">
                          <MapPin className="h-3 w-3 text-brand-muted shrink-0 mt-0.5" />
                          <p className="text-xs text-brand-muted truncate">{loc.address}</p>
                        </div>
                        <p className="text-xs text-brand-muted mt-0.5">{loc.phone}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-brand-muted group-hover:text-brand-primary shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold uppercase text-brand-dark tracking-wide text-lg">
                    Pick a Date & Time
                  </h2>
                  <p className="text-sm text-brand-primary font-semibold">
                    {locations.find((l) => l.id === data.locationId)?.name}
                  </p>
                </div>

                {/* Week navigation */}
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
                    disabled={weekOffset === 0}
                    className="p-1.5 rounded border border-brand-border disabled:opacity-30 hover:border-brand-primary transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-brand-muted uppercase tracking-wider font-semibold">
                    {weekDays[0].label} – {weekDays[6].label}
                  </span>
                  <button
                    onClick={() => setWeekOffset((w) => w + 1)}
                    className="p-1.5 rounded border border-brand-border hover:border-brand-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Day grid */}
                <div className="grid grid-cols-7 gap-1.5 mb-6">
                  {weekDays.map(({ date, label, dayName }) => {
                    const iso = date.toISOString().split("T")[0];
                    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                    return (
                      <button
                        key={iso}
                        onClick={() => !isPast && setSelectedDate(iso)}
                        disabled={isPast}
                        className={`flex flex-col items-center py-2.5 rounded-lg border text-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                          selectedDate === iso
                            ? "border-brand-primary bg-brand-primary text-white"
                            : "border-brand-border hover:border-brand-primary"
                        }`}
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">
                          {dayName}
                        </span>
                        <span className="text-sm font-bold mt-0.5">{label.split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div>
                    <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark mb-3">
                      Available Times
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {TIME_SLOTS.map((time) => {
                        const unavail = UNAVAILABLE.includes(time);
                        return (
                          <button
                            key={time}
                            onClick={() => !unavail && setSelectedTime(time)}
                            disabled={unavail}
                            className={`py-2 rounded border text-xs font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                              selectedTime === time
                                ? "border-brand-primary bg-brand-primary text-white"
                                : "border-brand-border text-brand-dark hover:border-brand-primary"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-8">
                  <Button variant="outline" onClick={back} className="flex-1">
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => next({ date: selectedDate, time: selectedTime })}
                    className="flex-1"
                  >
                    Continue
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-8"
              >
                <h2 className="font-heading font-bold uppercase text-brand-dark tracking-wide text-lg mb-6">
                  Your Details
                </h2>
                <form
                  onSubmit={handleSubmit((d) =>
                    next({ firstName: d.firstName, lastName: d.lastName, email: d.email, phone: d.phone, dob: d.dob, reason: d.reason, notes: d.notes })
                  )}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Jean"
                      error={errors.firstName?.message}
                      {...register("firstName")}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Dupont"
                      error={errors.lastName?.message}
                      {...register("lastName")}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="jean@example.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      placeholder="+230 5XX XXXX"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                    <Input
                      label="Date of Birth"
                      type="date"
                      error={errors.dob?.message}
                      {...register("dob")}
                    />
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
                        Reason for Visit
                      </label>
                      <select
                        className="h-11 rounded border border-brand-border px-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        {...register("reason")}
                      >
                        <option value="eye-test">Eye Test</option>
                        <option value="frame-selection">Frame Selection</option>
                        <option value="contact-lens-fitting">Contact Lens Fitting</option>
                        <option value="collection">Collect Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
                      Notes (optional)
                    </label>
                    <textarea
                      className="w-full rounded border border-brand-border px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                      rows={3}
                      placeholder="Any specific concerns or requirements…"
                      {...register("notes")}
                    />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-brand-border accent-brand-primary"
                      {...register("agreeToPrivacy")}
                    />
                    <span className="text-xs text-brand-muted">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-brand-primary hover:underline" target="_blank">
                        Privacy Policy
                      </Link>{" "}
                      and consent to Jeff Patel Optometrist storing my data for this appointment.
                    </span>
                  </label>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" type="button" onClick={back} className="flex-1">
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button variant="primary" type="submit" className="flex-1">
                      Review Booking
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <motion.div
                key="step4"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="font-heading font-bold uppercase text-brand-dark tracking-wide text-xl mb-2">
                    Appointment Booked!
                  </h2>
                  <p className="text-brand-muted text-sm">
                    You will receive an SMS confirmation once a staff member approves your booking.
                  </p>
                </div>

                {/* Booking summary card */}
                <div className="bg-brand-surface rounded-xl border border-brand-border divide-y divide-brand-border mb-8">
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs text-brand-muted uppercase tracking-wider">Reference</span>
                    <span className="font-heading font-bold text-brand-primary tracking-widest">
                      {bookingRef}
                    </span>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">
                        {locations.find((l) => l.id === data.locationId)?.name}
                      </p>
                      <p className="text-xs text-brand-muted">
                        {locations.find((l) => l.id === data.locationId)?.address}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-brand-primary shrink-0" />
                    <p className="text-sm text-brand-dark">
                      {data.date
                        ? new Date(data.date).toLocaleDateString("en-MU", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : ""}
                    </p>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-brand-primary shrink-0" />
                    <p className="text-sm text-brand-dark">{data.time}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-brand-dark font-semibold">
                      {data.firstName} {data.lastName}
                    </p>
                    <p className="text-xs text-brand-muted">{data.email}</p>
                    <p className="text-xs text-brand-muted">{data.phone}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild variant="primary" className="w-full">
                    <Link href="/">Back to Home</Link>
                  </Button>
                  <button
                    onClick={reset}
                    className="text-sm text-brand-muted hover:text-brand-primary transition-colors text-center"
                  >
                    Book another appointment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
