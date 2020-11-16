import Client from 'belvo';

const belvoService = {
    init: async (env) => {
        try {
            let belvo = new Client(
                process.env.BELVO_SECRET_ID,
                process.env.BELVO_SECRET_KEY,
                `https://${env}.belvo.co`,
            )
    
            await belvo.connect();
    
            return belvo;
        } catch(error) {
            return error;
        }
    }
}

export default belvoService;