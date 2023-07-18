import React, { Fragment, useEffect, useState } from "react";

const body = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "what am I asking?"}]
}

const myInit = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer OPENAI_API_KEY"
    },
    body: JSON.stringify(body)
}
export default function App() {

    useEffect(() => {
        const res = fetch("https://api.openai.com/v1/chat/completions", myInit)
        res.then((result) => {
            return result.json()
        }).then(result => {
            console.log(result.choices[0].message.content);
        })
    })
    return (
        <Fragment>
            this is a chagpt test
        </Fragment>
    )
}
