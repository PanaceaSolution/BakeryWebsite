"use client";

import React from "react";

const Map: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[962px] aspect-[962/667] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9913176393006!2d85.33252897554217!3d27.686663226403297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195f654fbfdf%3A0xa8a9205c4cdeed15!2sBaker&#39;s%20Bakery!5e0!3m2!1sen!2snp!4v1752835130888!5m2!1sen!2snp"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Baker's Bakery Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
