import { transformationTypes } from '@/constants'
import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();      //using clerk to get userid
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')
  
  const user = await getUserById(userId);   //getting userid from our db , cuz we need to pass this to the transformation form

  return (
    <>
      <Header
        title={transformation.title} 
        subtitle={transformation.subTitle}
      />

      <section className="mt-10">
       <TransformationForm 
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
       /> 
      </section>
    </>   
  )
}

export default AddTransformationTypePage