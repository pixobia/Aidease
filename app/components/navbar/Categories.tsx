'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiKidneys,
  GiLeg
} from 'react-icons/gi';
import {
   FaEye,
   FaHandPaper,
   FaHeart,
   FaHospital,
   FaLungs,
   FaTint,
} from 'react-icons/fa';
import { BsCapsule, BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Hospital',
    icon: FaHospital,
    description: 'This Hospital is good one!',
  },
  {
    label: 'Blood',
    icon: FaTint,
    description: 'The donor of the blood is a trusted one.'
  },
  {
    label: 'Heart Transplant',
    icon: FaHeart,
    description: ' A Second Chance at Life!',
  },
  {
    label: 'Lung Transplant',
    icon: FaLungs,
    description: 'Breath of Hope!'
  },
  {
    label: 'Kidney Transplant',
    icon: GiKidneys,
    description: 'Renewing Vitality!'
  },
  {
    label: 'Eye Transplant',
    icon: FaEye,
    description: 'Renewing Vision with Eye Transplants!'
  },
  {
    label: 'Prosthetic Hand',
    icon: FaHandPaper,
    description: 'Turning loss into opportunity.!'
  },
  {
    label: 'Prosthetic Leg',
    icon: GiLeg,
    description: 'Empowering steps forward with prosthetic legs.!'
  },
  {
    label: 'Medicine',
    icon: BsCapsule,
    description: 'Science gift for healing.!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;