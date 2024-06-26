import { cn } from "@/lib/utils"
import { Span } from "next/dist/trace"
import React from "react"

const expList = [
  {
    title: "SSET",
    as: "B.Tech Computer Science & Engineering",
  },
  {
    title: "Wipro",
    as: "Project Engineer (2019 - 2021)",
  },
  {
    title: "Chargebee",
    as: "Frontend Engineer (2021 - 2022)",
  },
  {
    title: "University of Greenwich",
    as: "MSc Data Science (2023 - 2024)",
  },
  {
    title: "???",
    as: "Data Scientist",
  },
]

function Experience() {
  return (
    <div className="bg-[#20201f] px-5 py-16">
      <h1 className="text-center text-5xl font-bold">My Journey So Far ...</h1>
      <div className="mt-24 flex w-full flex-col items-center gap-7">
        {expList.map((exp, index) => (
          <div
            key={index}
            className="relative w-full max-w-[470px] rounded-xl border px-6 py-5 text-center before:absolute before:inset-0 before:rounded-[11px] before:border-t before:border-white before:bg-gradient-to-b before:from-gray-100 before:shadow dark:border-white/15 dark:bg-gray-900 dark:before:border-white/20 dark:before:from-white/10 dark:before:to-transparent  dark:before:shadow-gray-950"
          >
            <p
              className={cn(
                "mb-2 bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text font-extrabold uppercase text-transparent",
                {
                  "text-white": exp.title == "???",
                }
              )}
            >
              {exp.title}
            </p>
            <p
              className={cn("text-slate-50-900  font-bold", {
                "bg-gradient-to-tr from-[#90ce6e] to-[#ff2d2d] bg-clip-text text-2xl uppercase text-transparent":
                  exp.as == "Data Scientist",
              })}
            >
              {exp.as}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
