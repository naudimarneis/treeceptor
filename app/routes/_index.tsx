import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { fetchRequestMatchers } from "~/domain/requestMatchers";

export const meta: MetaFunction = () => {
  return [{ title: "Treeceptor" }];
};

export async function loader() {
  return json(fetchRequestMatchers());
}

export default function Index() {
  const requestMatchers = useLoaderData<typeof loader>();
  return (
    <>
      <h2 className="p-8 text-lg/7 font-semibold tracking-[-0.015em] text-[#7ed0ec]">
        Request Matchers
      </h2>
      <div className="container mx-auto p-8 pt-0">
        <table className="min-w-full text-left text-sm/6">
          <thead className="text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium dark:border-b-white/10">
                Method
              </th>
              <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium dark:border-b-white/10">
                URL
              </th>
              <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium dark:border-b-white/10">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                POST
              </td>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                /acquisitive_periods?idContrato=12345
              </td>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                <a>Edit</a>
              </td>
            </tr>
            <tr>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                POST
              </td>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                /acquisitive_periods?idContrato=12345
              </td>
              <td className="text-zinc-500 dark:text-zinc-400 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-2 sm:last:pr-2">
                <a>Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="text-[#7ed0ec] p-2 m-2 rounded-xl bg-[#7ed0ec] shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
          Adicionar
        </button>
      </div>
    </>
  );
}
