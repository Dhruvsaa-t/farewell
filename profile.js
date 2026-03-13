(function(profiles) {
    const wrapper = document.querySelector('#profileWrapper');

    profiles.forEach(profile => {
        // Create card container
        const box = document.createElement('div');
        box.className = 'boxes';

        // Profile Picture
        const profilePicture = document.createElement('div');
        profilePicture.className = 'profilePicture';
        if (profile.image) {
            const img = document.createElement('img');
            img.src = profile.image;
            img.alt = profile.name;
            profilePicture.appendChild(img);
        } else {
            profilePicture.textContent = profile.initials || '';
        }

        // Profile Name
        const profileName = document.createElement('div');
        profileName.className = 'profileName';
        const h2 = document.createElement('h2');
        h2.textContent = profile.name;
        profileName.appendChild(h2);

        // Profile Description
        const profileDesc = document.createElement('div');
        profileDesc.className = 'profileDiscription';
        const p = document.createElement('p');
        p.textContent = profile.description;
        profileDesc.appendChild(p);

        // More Info Button
        const link = document.createElement('a');
        link.href = profile.link || '#';
        const button = document.createElement('button');
        button.className = 'VisitBtn';
        button.textContent = 'see awards...';
        link.appendChild(button);

        // Append all to card
        box.appendChild(profilePicture);
        box.appendChild(profileName);
        box.appendChild(profileDesc);
        box.appendChild(link);

        wrapper.appendChild(box);
    });

})([
    { image:'ProfilePic/Jay.png', name:'Jay Pookie 🧸', description:'Group no pookie boy. Masti ma always active, badha ne bhega kari ne dap sathe fun create kare. Tuk-tuk Activa par aesthetic entry mare ane instantly badha sathe friend bani jai. Sanje red-square aej dekhay', link:'Jay.html' },
    { image:'ProfilePic/Ketan.png', name:'Ketan Desi Kalakar ✂️', description:'Desi kalakar ane Non Ghanvadar no king. Hair cut expert, Bhavnagar ma rehine yatra dham ma kaam kare chhe. Bike sathe pahad chadavva ma master ane books vachva-lakhva no pan shauk. Chhokriyu ne sari rite samajva ma pan experience chhe 😄', link:'ketan.html' },
    { image:'ProfilePic/Ayush.png', name:'Ayush Arbi', description:'Thodo attitude mode ma rahe chhe ane magaj jaldi garam thai jai chhe 😄. Ego thodu sensitive version chhe. Ena pase ek  ni bandhukdi pan chhe je thi friends ne maja ma daraave chhe. Friends pase haju 2 davat pending chhe. Manav eno best friend chhe, ane future ma shayad ek special nikah davat pan mali jai 😉', link:'Ayush.html' },
    { image:'ProfilePic/Bhavdip.png', name:'Bhavdip The Bunker', description:'Bhavdip Shihor mathi aave chhe… pan college sudhi pogvu thodu mushkil pade chhe — joggers thi agal pag ochha vadhare chhe 😆. Bus ma quietly full moj kare chhe, pan koi ne khabar pan nathi padti. Sagar no best friend ane Sem 1–2 ma game te class ma jai besi jato. Nidhi madam e ek vakhat “psycho” pan kahi didhu hatu.', link:'Bhavdip.html' },
    { image:'ProfilePic/Dhruvrajsinh.png', name:'Namuno', description:'Naam: Dhruvrajsinh, Class no “Dhruv”, close friends ma “Namuno” tariqe famous. 3 varsh ma ek j bunk — ae pan ghare permission lai ne. Programming aavde chhe… pan ena karta show-off thodu vadhu kare chhe 😆 ane “baka ji” pan ghani vaar boli jai chhe. Masti na time full active, baki thodo serious mode. Friends easily bani jai chhe pan consistency thodi update ma chhe. Drive thodo heavy chhe.', link:'Dhruvrajsinh.html' },
    { image:'ProfilePic/Aman.png', name:'Chaman 📻', description:'Thodo insecure pan full FM mode ma bak bak chalu rahe. Manish sir favourite chhe. Eek Group ma join thavani try kare chhe pan ghani vaar recess ma gayab thai jai chhe 😆. College no second floor favourite spot ane curly hair style no fan. Ketan no best friend ane lift levi ena mate ekdam easy chhe.', link:'Aman.html' },
    { image:'ProfilePic/Tushar.png', name:'Sasto Devayat', description:'“Sasto Devayat” tariqe famous. Devayat Khavad no right hand. Baka-jiki bolva ma expert ane moremora karva ma pan master 😄. UPSC/GPSC ni tayari ma busy. Class ni almost badhi information ena pase ready hoy. Friendship circle moto chhe pan mostly boys sathe. Attitude pan full on.', link:'Tushar.html' }

]);

