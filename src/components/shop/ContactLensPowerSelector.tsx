"use client";

import { useState } from "react";
import { generateLensPowers } from "@/lib/utils";
import type { ContactLensPower } from "@/types/product";

const sphPowers = generateLensPowers(-20, 20, 0.25);
const cylPowers = ["", ...generateLensPowers(-6, -0.25, 0.25)];
const axisPowers = Array.from({ length: 180 }, (_, i) => String(i + 1));
const addPowers = ["", ...generateLensPowers(0.75, 3.0, 0.25)];

interface EyePowerProps {
  eye: "right" | "left";
  value: { sph: string; cyl: string; axis: string; add: string };
  onChange: (v: { sph: string; cyl: string; axis: string; add: string }) => void;
}

function EyePowerForm({ eye, value, onChange }: EyePowerProps) {
  const label = eye === "right" ? "Right Eye (OD)" : "Left Eye (OS)";

  return (
    <div className="space-y-3">
      <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] text-brand-muted uppercase tracking-wider">SPH *</label>
          <select
            value={value.sph}
            onChange={(e) => onChange({ ...value, sph: e.target.value })}
            className="mt-1 w-full h-10 rounded border border-brand-border px-2 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="">Select</option>
            {sphPowers.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] text-brand-muted uppercase tracking-wider">CYL</label>
          <select
            value={value.cyl}
            onChange={(e) => onChange({ ...value, cyl: e.target.value, axis: e.target.value ? value.axis : "" })}
            className="mt-1 w-full h-10 rounded border border-brand-border px-2 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {cylPowers.map((p) => (
              <option key={p} value={p}>{p || "None"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] text-brand-muted uppercase tracking-wider">
            AXIS {value.cyl ? "*" : ""}
          </label>
          <select
            value={value.axis}
            onChange={(e) => onChange({ ...value, axis: e.target.value })}
            disabled={!value.cyl}
            className="mt-1 w-full h-10 rounded border border-brand-border px-2 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <option value="">Select</option>
            {axisPowers.map((p) => (
              <option key={p} value={p}>{p}°</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] text-brand-muted uppercase tracking-wider">ADD</label>
          <select
            value={value.add}
            onChange={(e) => onChange({ ...value, add: e.target.value })}
            className="mt-1 w-full h-10 rounded border border-brand-border px-2 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {addPowers.map((p) => (
              <option key={p} value={p}>{p || "None"}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

const emptyEye = { sph: "", cyl: "", axis: "", add: "" };

interface ContactLensPowerSelectorProps {
  onConfirm: (power: ContactLensPower[]) => void;
}

export default function ContactLensPowerSelector({ onConfirm }: ContactLensPowerSelectorProps) {
  const [sameForBoth, setSameForBoth] = useState(false);
  const [rightEye, setRightEye] = useState(emptyEye);
  const [leftEye, setLeftEye] = useState(emptyEye);

  const isValid =
    rightEye.sph &&
    (rightEye.cyl ? rightEye.axis : true) &&
    (sameForBoth || (leftEye.sph && (leftEye.cyl ? leftEye.axis : true)));

  const handleConfirm = () => {
    if (!isValid) return;
    const powers: ContactLensPower[] = sameForBoth
      ? [{ sph: rightEye.sph, cyl: rightEye.cyl || undefined, axis: rightEye.axis || undefined, add: rightEye.add || undefined, eye: "both" }]
      : [
          { sph: rightEye.sph, cyl: rightEye.cyl || undefined, axis: rightEye.axis || undefined, add: rightEye.add || undefined, eye: "right" },
          { sph: leftEye.sph, cyl: leftEye.cyl || undefined, axis: leftEye.axis || undefined, add: leftEye.add || undefined, eye: "left" },
        ];
    onConfirm(powers);
  };

  return (
    <div className="border border-brand-border rounded-xl p-5 space-y-5 bg-brand-surface">
      <div className="flex items-center justify-between">
        <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
          Enter Your Prescription
        </p>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={sameForBoth}
            onChange={(e) => setSameForBoth(e.target.checked)}
            className="h-4 w-4 rounded border-brand-border accent-brand-primary"
          />
          <span className="text-xs text-brand-muted">Same for both eyes</span>
        </label>
      </div>

      <EyePowerForm eye="right" value={rightEye} onChange={setRightEye} />
      {!sameForBoth && (
        <EyePowerForm eye="left" value={leftEye} onChange={setLeftEye} />
      )}

      <p className="text-[10px] text-brand-muted">
        * Required fields. If you don&apos;t have your prescription, book a contact lens fitting appointment.
      </p>

      <button
        onClick={handleConfirm}
        disabled={!isValid}
        className="w-full py-2.5 bg-brand-primary text-white text-xs font-heading font-semibold uppercase tracking-wider rounded hover:bg-brand-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Confirm Prescription
      </button>
    </div>
  );
}
