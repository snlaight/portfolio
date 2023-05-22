import Image from 'next/image';

import { ISkillComponentProps } from '@/utils/interfaces/props';

const Skill = ({ skill, widthCustom }: ISkillComponentProps) => (
  <figure
    className={`relative flex flex-col content-center h-16 overflow-hidden group gap-y-2 items-center ${
      widthCustom ? 'w-[5rem]' : 'w-full'
    }`}
  >
    <picture className='w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10'>
      <Image className='object-cover object-center' src={skill.image.asset.url} alt={skill.name} width={65} height={65} />
    </picture>
    <figcaption className='absolute -bottom-8 text-xs text-center text-gray-50 duration-300 ease-in-out md:text-lg group-hover:-bottom-1'>
      {skill.name}
    </figcaption>
  </figure>
);

export default Skill;
