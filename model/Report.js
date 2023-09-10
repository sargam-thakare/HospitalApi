const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    
    status: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
        
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
  
}, {
    timestamps: true
});


const Report = mongoose.model('Report', reportSchema);

module.exports = Report;