import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getRequestMatcher } from "~/domain/requestMatchers";

export async function loader({ params }: LoaderFunctionArgs) {
  const { requestMatcherId } = params;
  return json(await getRequestMatcher({ id: String(requestMatcherId) }));
}

export default function RequestMatchers() {
  const requestMatcher = useLoaderData<typeof loader>();
  const [selectedMethod, setSelectedMethod] = useState(requestMatcher.method);
  return (
    <Form method="post">
      <h2 className="p-8 text-lg/7 font-semibold tracking-[-0.015em] text-[#7ed0ec]">
        Edição de {requestMatcher.id}
      </h2>
      <h3 className="m-8 mb-0 mt-0 font-semibold tracking-[-0.015em] text-[#7ed0ec]">
        Request match rule
      </h3>
      <div className="p-4 m-4 mt-0 rounded-xl bg-[#7ed0ec] shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        <label
          htmlFor="methods"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Methods
        </label>
        <select
          id="method"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          value={selectedMethod}
          name="method"
        >
          <option>Choose a method</option>
          <option value="DELETE">DELETE</option>
          <option value="GET">GET</option>
          <option value="PATCH">PATCH</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
        </select>
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Url Matcher
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="ulr"
          name="url"
          value={requestMatcher.url}
        />
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Header Matcher
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="header"
          name="header"
          value={requestMatcher.header}
        />
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Body Matcher
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="body"
          name="body"
          value={requestMatcher.body}
        />
      </div>
      <h3 className="m-8 mb-0 mt-0 font-semibold tracking-[-0.015em] text-[#7ed0ec]">
        Response builder
      </h3>
      <div className="p-4 m-4 mt-0 rounded-xl bg-[#7ed0ec] shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Status
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="responseStatus"
          name="responseStatus"
          value={requestMatcher.responseStatus}
        />
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Body
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          id="body"
          name="body"
          placeholder="enter your json response"
          value={requestMatcher.responseBody}
        />
      </div>
      <button className="text-[#7ed0ec] p-2 m-2 rounded-xl bg-[#7ed0ec] shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
        Salvar
      </button>
    </Form>
  );
}
