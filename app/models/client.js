import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema( {
	name: String,
	email: {
		type: String,
		unique: true
	},
	phone: {
		type: String,
		unique: true
	},
	providers: [ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Provider'
	} ],

	updated: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
} );

export default mongoose.model( 'Client', ClientSchema );
