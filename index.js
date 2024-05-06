require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/instagram-posts', async (req, res) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
            params: {
                fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp',
                access_token: process.env.ACCESS_TOKEN
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar posts do Instagram:', error);
        res.status(500).json({ message: 'Erro ao buscar posts do Instagram' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
