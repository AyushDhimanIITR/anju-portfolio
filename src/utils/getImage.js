import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';

const getImage = (idx) => {
    switch (idx) {
        case 1:
            return image1;
        case 2:
            return image2;
        case 3:
            return image3;
        case 4:
            return image4;
        default:
            return image1;
    }
}

export default getImage;