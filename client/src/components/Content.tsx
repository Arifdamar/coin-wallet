import React, { FunctionComponent } from "react";

interface Props {}

const Content: FunctionComponent<Props> = () => {
  return (
    <div className="bg-white w-full md:w-3/4 xl:w-5/6 px-6 py-6 flex flex-col">
      <div>Ünlü coinlerin fiyat listesi</div>
      <div>Kişinin coinlerinin bilgisi - Net profit - add new butonu</div>
    </div>
  );
};

export default Content;
