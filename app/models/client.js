import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 35
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    providers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider'
        }
    ],

    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
} );

ClientSchema.path( 'email' ).validate( function( email ) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test( email ); // Assuming email has a text attribute
}, 'The e-mail field.' )

export default mongoose.model( 'Client', ClientSchema );
