"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { bookingSchema, type BookingFormValues } from "@/lib/validation";
import { sendToSheet } from "@/lib/sheet";
import { allGrades } from "@/data/grades";

type Status = "idle" | "submitting" | "success" | "error";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: BookingFormValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      await sendToSheet(values);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "تعذّر إرسال الطلب، حاول مرة أخرى.",
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm"
      >
        <CheckCircle2 className="h-14 w-14 text-whatsapp" aria-hidden="true" />
        <h3 className="text-2xl font-extrabold text-white">تم استلام طلبك!</h3>
        <p className="text-slate-300">
          سنتواصل معك قريبًا لتأكيد الحجز. شكرًا لثقتك.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-semibold text-blue-400 hover:underline"
        >
          إرسال طلب آخر
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30 transition";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_-25px_rgba(37,99,235,0.5)] backdrop-blur-sm sm:p-8"
    >
      {/* Student name */}
      <motion.div variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
        <label htmlFor="studentName" className="mb-1.5 block text-sm font-bold text-white">
          اسم الطالب
        </label>
        <input
          id="studentName"
          type="text"
          autoComplete="name"
          placeholder="الاسم الكامل"
          aria-invalid={!!errors.studentName}
          className={inputClass}
          {...register("studentName")}
        />
        {errors.studentName && <FieldError message={errors.studentName.message} />}
      </motion.div>

      {/* Student phone */}
      <motion.div variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
        <label htmlFor="studentPhone" className="mb-1.5 block text-sm font-bold text-white">
          رقم الطالب
        </label>
        <input
          id="studentPhone"
          type="tel"
          inputMode="tel"
          dir="ltr"
          autoComplete="tel"
          placeholder="01xxxxxxxxx"
          aria-invalid={!!errors.studentPhone}
          className={`${inputClass} text-start`}
          {...register("studentPhone")}
        />
        {errors.studentPhone && <FieldError message={errors.studentPhone.message} />}
      </motion.div>

      {/* Parent phone */}
      <motion.div variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
        <label htmlFor="parentPhone" className="mb-1.5 block text-sm font-bold text-white">
          رقم ولي الأمر
        </label>
        <input
          id="parentPhone"
          type="tel"
          inputMode="tel"
          dir="ltr"
          autoComplete="tel"
          placeholder="01xxxxxxxxx"
          aria-invalid={!!errors.parentPhone}
          className={`${inputClass} text-start`}
          {...register("parentPhone")}
        />
        {errors.parentPhone && <FieldError message={errors.parentPhone.message} />}
      </motion.div>

      {/* Grade */}
      <motion.div variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
        <label htmlFor="grade" className="mb-1.5 block text-sm font-bold text-white">
          الصف الدراسي
        </label>
        <select
          id="grade"
          defaultValue=""
          aria-invalid={!!errors.grade}
          className={inputClass}
          {...register("grade")}
        >
          <option value="" disabled className="bg-navy text-white">
            اختر الصف الدراسي
          </option>
          {allGrades.map((g) => (
            <option key={g.id} value={g.id} className="bg-navy text-white">
              {g.label}
            </option>
          ))}
        </select>
        {errors.grade && <FieldError message={errors.grade.message} />}
      </motion.div>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-6 py-3.5 font-bold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] transition-all hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            جارٍ الإرسال…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            احجز مكانك الآن
          </>
        )}
      </button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-red-400">
      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
      {message}
    </p>
  );
}
