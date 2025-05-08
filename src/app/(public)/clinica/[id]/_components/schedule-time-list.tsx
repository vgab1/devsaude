"use client";

import { Button } from "@/components/ui/button";
import { TimeSlot } from "./schedule-content";
import { cn } from "@/lib/utils";
import {
  isSlotSequenceAvailable,
  isSlotsInThePast,
  isToday,
} from "./schedule-utils";

interface ScheduleTimeListProps {
  selectedDate: Date;
  selectedTime: string;
  requiredSlots: number;
  blockedTimes: string[];
  availableTimeSlots: TimeSlot[];
  clinicTimes: string[];
  onSelectTime: (time: string) => void;
}

export function ScheduleTimeList({
  selectedDate,
  selectedTime,
  requiredSlots,
  blockedTimes,
  availableTimeSlots,
  clinicTimes,
  onSelectTime,
}: ScheduleTimeListProps) {
  const dateIsToday = isToday(selectedDate);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
      {availableTimeSlots.map((slot) => {
        const sequenceOk = isSlotSequenceAvailable(
          slot.time,
          requiredSlots,
          clinicTimes,
          blockedTimes
        );

        const slotInPast = dateIsToday && isSlotsInThePast(slot.time);

        const slotEnable = slot.avaliable && sequenceOk && !slotInPast;

        return (
          <Button
            onClick={() => slotEnable && onSelectTime(slot.time)}
            type="button"
            variant="outline"
            key={slot.time}
            className={cn(
              "h-10 select-none",
              selectedTime === slot.time &&
                "border-2 border-emerald-500 text-primary",
              !slotEnable && "opacity-50 cursor-not-allowed"
            )}
            disabled={!slotEnable}
          >
            {slot.time}
          </Button>
        );
      })}
    </div>
  );
}
