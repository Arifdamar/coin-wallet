import React, { FunctionComponent } from "react";

interface Props {}

const Content: FunctionComponent<Props> = () => {
  return (
    <div className="bg-gray-200 h-full w-full px-6 py-6 flex flex-col gap-3">
      <div>Ünlü coinlerin fiyat listesi</div>
      <div>Kişinin coinlerinin bilgisi - Net profit - add new butonu</div>
    </div>
  );
};

export default Content;
