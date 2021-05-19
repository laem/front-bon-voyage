import { formatDuration, intervalToDuration } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatHoursAndMinutes = (duration: number, options: Record<string, any> = {}) => {
  return formatDuration(intervalToDuration({ start: 0, end: duration * 1000 }), {
    locale: fr,
    format: ['hours', 'minutes'],
    ...options,
  })
    .replace('heures', 'h')
    .replace('heure', 'h')
    .replace('minutes', 'min')
    .replace('minute', 'min')
    .replaceAll(' ', '');
};