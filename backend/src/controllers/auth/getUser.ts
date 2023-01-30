import Profile from "../../models/ProfileSchema"

const getMe = async (req,res)=>{
    if (req.user.type === "CLUB"){
        const profile = await Profile.findById(req.user.userId)
        if (!profile) return res.status(404).send({message: "User not found."})
        return res.status(200).send({sport: profile.sport, league: profile.league, ...req.user})
    }
    res.status(200).json(req.user)
}

export default getMe