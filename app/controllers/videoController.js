
const Video = require('../models/video')

exports.create =(req,res)=>{
    const video = new Video({
        title: req.body.title,
        urlThumbnail: req.body.urlThumbnail,
        linkVideo: req.body.linkVideo
    });

    try {
        const videoToSave = video.save();
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.getAll = async (req,res)=>{
    try {
        const video = await Video.find();
        res.json(video);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getOne = async (req,res)=>{
    try {
        const video = await Video.findById(req.params.id).populate(['products','comments']);
        res.json(video);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.update = async (req,res)=>{
    try {
        const id = req.params.id;
        const updatedData=req.body;
        const options = {new:true};

        const result = await Video.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.delete = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteData = await Video.findByIdAndDelete(id);
        res.send('Video deleted..');
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}