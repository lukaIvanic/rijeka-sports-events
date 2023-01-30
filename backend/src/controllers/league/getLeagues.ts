import League from "../../models/LeagueSchema"

const getAllLeagues = async (req,res)=>{
    try {
        const leagues = await League.find({})
        return res.status(200).send(leagues)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}

export default getAllLeagues