"use client";
import { useState } from "react";

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <div>новости</div>
      <div>Календарь</div>
      <div>Результаты</div>
      <div>Форма заявки</div>
      <div className="flex items-center">
        <input
          checked={check}
          id="checkbox"
          onChange={() => setCheck(!check)}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Check me
        </label>
      </div>
    </div>
  );
}
