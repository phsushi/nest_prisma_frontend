import { fonts } from '../../tokens/fonts'
import { colors } from '../../tokens/colors'

function Logo() {
  return (
    <div className='flex items-center justify-center w-[25%]'>
      <span style={{ fontFamily: fonts.display, fontSize: 25 }}>
      mo<span style={{ color: colors.brand.primary }}>.</span>vera
    </span>
    </div>
    
  )
}

export default Logo