import React from 'react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <textarea
            className='w-full min-h-[500px] p-4 border rounded-lg bg-gray-200 text-black outline-none focus:bg-gray-50 duration-200'
            value={value || defaultValue}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your content here..."
          />
        )}
      />
    </div>
  );
}
