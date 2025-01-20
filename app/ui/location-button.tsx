'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LocationButton() {
  return (
    <button
      onClick={() => navigator.geolocation.getCurrentPosition(
        (result) => alert(result.coords.latitude),
        (err) => alert(JSON.stringify(err)),
        {timeout: 60 * 1000}
      )}
      className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    >
      <span>定位</span> <ArrowRightIcon className="w-5 md:w-6" />
    </button>
  );
} 