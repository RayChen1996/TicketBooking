import React from "react";
import SectionTitle from "../../SectionTitle";
import ActivityCards from "../home/ActivityCards";

interface ActiveProps {
  label: string;
}
export default function EvtIndex() {
  const labels: ActiveProps[] = [
    {
      label: "演出",
    },
    {
      label: "音樂",
    },
    {
      label: "舞蹈",
    },
    {
      label: "戲劇",
    },
    {
      label: "音樂會",
    },
    {
      label: "課程講座",
    },
    {
      label: "社群活動",
    },
    {
      label: "展覽",
    },
    {
      label: "研討會",
    },

    {
      label: "電影",
    },

    {
      label: "電音派對",
    },

    {
      label: "遊戲競賽",
    },
    {
      label: "親子",
    },
    {
      label: "藝文活動",
    },
    {
      label: "運動",
    },
    {
      label: "交通旅遊",
    },
    {
      label: "美食",
    },
    {
      label: "資訊科技",
    },
    {
      label: "聯誼",
    },
    {
      label: "戶外",
    },
    {
      label: "研討會",
    },
    {
      label: "線上活動",
    },
  ];
  return (
    <div>
      <SectionTitle chtTitle="所有活動" engTitle="EVENT" />
      <div className=" container m-auto">
        <ul className=" flex flex-wrap  gap-3 mt-4">
          {labels.map((item) => (
            <li key="" className=" border-2 border-primary border-l-4">
              <strong className="px-6 py-1">{item.label}</strong>
            </li>
          ))}
        </ul>
      </div>
      <ActivityCards />
    </div>
  );
}
