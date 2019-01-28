import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema( {
	id: {
		type: Number,
		unique: true
	},
	name: {
		type: String
	},

	updated: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
} );

export default mongoose.model( 'Provider', ProviderSchema );
