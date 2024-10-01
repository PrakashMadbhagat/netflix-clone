import { fetchFromTMDB } from "../services/tmdb.service.js"
export async function getTrendingMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getMovieTrailer(req,res){
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/movie_id/${id}language=en-US`);
        res.json({success : true , trailer : data.res})
    } catch (error) {
        if(error.message.include("404")){
            return res.status(404).send(null);
        }

        res.status(500).json({ success : false , message : "Internal Server Error"})
    }
}