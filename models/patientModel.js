const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        PatientID: {
            type: String,
            required: [true, "Please enter the patient ID"]
        },
        Surname: {
            type: String,
            required: [true, "Please enter the patient's Surname"]
        },
        OtherNames: {
            type: String,
            required: [true, "Please enter the patient's other names"]
        },
        Gender: {
            type: String,
            required: true
        },
        PhoneNumber: {
            type: Number,
            required: true
        },
        ResidentialAddress: {
            City: {
                type: String,
                required: true
            },
            Street: {
                type: String,
                required: false
            }
        },
        EmergencyName: {
            type: String,
            required: true 
        },
        EmergencyPhone: {
            type: Number,
            required: true
        },
        Relationship: {
            type: String,
            required: true
        }


    },
    {
        timestamps:true
    }
)

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patients