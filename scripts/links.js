const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(weeks) {
    const activitiesSection = document.getElementById('activities');
    const list = document.createElement('ul');

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        listItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);

            // Add separator if not the last link
            if (index < week.links.length - 1) {
                listItem.appendChild(document.createTextNode(' | '));
            }
        });

        list.appendChild(listItem);
    });

    activitiesSection.appendChild(list);
}

// Call the function when the page loads
window.addEventListener('load', getLinks);