export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

/**
 * Verificar se determinado slot já passou
 */
export function isSlotsInThePast(slotTime: string) {
  const [slotHour, slotMinute] = slotTime.split(":").map(Number);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (slotHour < currentHour) {
    return true;
  } else if (slotHour === currentHour && slotMinute < currentMinute) {
    return true;
  }

  return false;
}

export function isSlotSequenceAvailable(
  startSlot: string,
  requiredSlots: number,
  allSlots: string[],
  blockedSlots: string[]
) {
  const startIndex = allSlots.indexOf(startSlot);
  if (startIndex === -1 || startIndex + requiredSlots > allSlots.length) {
    return false;
  }

  for (let i = startIndex; i < startIndex + requiredSlots; i++) {
    const slotTime = allSlots[i];

    if (blockedSlots.includes(slotTime)) {
      return false;
    }
  }
  return true;
}
