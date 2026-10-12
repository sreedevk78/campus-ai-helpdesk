// const {GoogleGenerativeAI}=require("@google/generative-ai");
// const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model=genAI.getGenerativeModel({
//     model: "gemini-2.5-flash"
// });

// module.exports=model;

const OpenAI = require("openai");

const client = new OpenAI({

    apiKey: process.env.DEEPSEEK_API_KEY,

    baseURL: "https://api.deepseek.com"

});

async function generateContent(input)
{
    let prompt;

    if(typeof input==="string")
    {
        prompt=input;
    }
    else if(
        input &&
        input.contents &&
        Array.isArray(input.contents)
    )
    {
        prompt=input.contents
            .map(message=>
                message.parts
                    .map(part=>part.text)
                    .join("\n")
            )
            .join("\n");
    }
    else
    {
        throw new Error(
            "Unsupported generateContent input."
        );
    }

    const completion=
    await client.chat.completions.create({

        model:process.env.AI_MODEL,

        messages:[
            {
                role:"user",
                content:prompt
            }
        ],

        temperature:
        input?.generationConfig?.temperature ?? 0,

        max_tokens:
        input?.generationConfig?.maxOutputTokens ?? 1024,

        response_format:
        input?.generationConfig?.responseMimeType==="application/json"
        ?{type:"json_object"}
        :undefined

    });

    return{

        response:{

            text()
            {
                return completion
                    .choices[0]
                    .message
                    .content;
            }

        }

    };
}

module.exports={

    generateContent

};