import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 35
    },

    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
} );

export default mongoose.model( 'Provider', ProviderSchema );
