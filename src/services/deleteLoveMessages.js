import { loveMessagesCol} from '../../connectDb.js'


loveMessagesCol.doc('FMMaOvMTFXT2FTyT1l5A').delete()
 .then(res => console.log('success!'))
 .catch(err => console.error('Error deleting', err))
