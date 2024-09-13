

type NavigationProps = {
    menu: any;
}

export type Props = NavigationProps

export const Hero = ({ menu }: Props) => {


    return(
        <div className="w-full bg-inherit py-2 md:py-10 mx-auto px-8 lg:px-0">
    <div className="container flex space-y-7 flex-col justify-center items-center mx-auto lg:items-start lg:justify-start">
        <div className="items-center max-w-2xl justify-center text-center lg:text-start mx-auto lg:items-start lg:justify-start lg:mx-px space-y-4">
                <p className="text-base md:text-xl text-gray-500">Fra idé til lansering – vi skaper effektive og profesjonelle nettsider som gir resultater for din bedrift.</p>
                <h2 className="text-5xl md:text-6xl text-blue-700">Profesjonell webdesign for fremtidens digitale utfordringer</h2>    
        </div>
        <div className="h-fit">
            <div className='col-span-1 relative h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Operahuset_i_Oslo_1.jpg" alt="block bilde" className=" object-contain" />
                <div className='absolute group top-2 overflow-hidden px-2 w-fit'>
                    <div className='bg-white flex min-h-fit h-0 px-6 py-4 justify-center rounded-lg'>
                        <div className='flex justify-center items-center text-red text-sm md:text-base'>
                            test
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}