import { transformationTypes } from '@/constants'
import Header from '@/components/shared/Header'

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <Header
      title={transformation.title} 
      subtitle={transformation.subTitle}
    />
  )
}

export default AddTransformationTypePage