import React from "react";
import EntranceSection from "../components/Results/EntranceSection";
import AplusSection from "../components/Results/AplusSection";

export const metadata = {
  title: "ATOM Results | Leading Coaching for NEET, JEE & Entrance Exams",
  description: "Check the academic achievements and entrance exam performance of ATOM students in NEET, JEE, KEAM, and secondary board exams.",
};

export default function ResultsPage() {
  return (
    <div className="page-content bg-white min-h-screen">
      <EntranceSection />
      <AplusSection />
    </div>
  );
}
