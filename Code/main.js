function expandServiceCate(element) {
    // Toggle the 'expanded' class on the clicked service-cate element
    element.classList.toggle('expanded');

    // Create a new image element and append it to the clicked service-cate element
    if (element.classList.contains('expanded')) {
        var newImg = document.createElement('div');
        // newImg.src = './';
        // newImg.alt = 'alternate_text_for_new_image';
        element.appendChild(newImg);
    } else {
        // Remove the new image element if the service-cate is collapsed
        var imgToRemove = element.querySelector('img:last-of-type');
        if (imgToRemove) {
            imgToRemove.remove();
        }
    }
}


const testimonials = [
    {
        imgurl: "../Assignment Assets/testimonial/author.png",
        description: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        author: "Mike Taylor",
        location: "London, UK"
    },
    {
        imgurl: "../Assignment Assets/testimonial/author2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lacinia neque. Nam nec velit a lectus eleifend efficitur. Donec eleifend sem nec ipsum interdum, ac vehicula mauris aliquet.",
        author: "Emma Smith",
        location: "New York, USA"
    },
    {
        imgurl: "../Assignment Assets/testimonial/author3.png",
        description: "Sed pretium eu sem eget semper. Nulla sit amet sapien nec orci vestibulum tincidunt. Curabitur ut lorem non ipsum faucibus vehicula nec ac velit. Sed suscipit sit amet nulla at gravida.",
        author: "John Doe",
        location: "Los Angeles, USA"
    }
];

let currentIndex = 0;

const imgElement = document.getElementById('testimonial-img');
const descriptionElement = document.getElementById('testimonial-description');
const authorElement = document.getElementById('testimonial-author');
const locationElement = document.getElementById('testimonial-location');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    imgElement.src = testimonial.imgurl;
    descriptionElement.textContent = testimonial.description;
    authorElement.textContent = testimonial.author;
    locationElement.textContent = testimonial.location;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

// Initial display
updateTestimonial();

