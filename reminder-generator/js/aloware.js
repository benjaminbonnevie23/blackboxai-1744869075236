// Templates for each reminder type with placeholders
const templates = {
  "pdr-normal": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

PDR: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

-Important-
New procedure to create the PDR album:
In the Asteroom app, tap the 3-line icon on the upper left corner, go to "MyTasks," press PDR/PDC and go to "matched".
Press the correct address/task ID and press the 3D Scan button there and answer the property questionnaire.
- Clean your camera and fully charge your equipment (phone case, lens, rotator, tripod), and bring them with you (don’t forget the tape measure).
- Update the Asteroom app.
- Notify me when uploading is complete.
- Do not leave until I confirm no missing panoramas.
- Measure the primary bedroom door & camera height.
- Open all doors, including walk-in closets; capture showerheads, stair landings, hallways, and exteriors.
- For detached structures, capture four exterior and interior shots.
- Prioritize interior scans.

Show the on-site contact your Asteroom Virtual Property Data Collector ID.
Tap the 3-line icon on the upper left corner, go to "MyTasks," and press the icon in the upper right to display your ID.

Thank you and drive safe!
`,
  "pdr-offerpad": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

PDR: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

-Important-
New procedure to create the PDR album:
In the Asteroom app, tap the 3-line icon on the upper left corner, go to "MyTasks," press PDR/PDC and go to "matched".
Press the correct address/task ID and press the 3D Scan button there.
This is an Offerpad task:
- If you are with an agent/homeowner, please avoid any appraisal terms. They are not doing anything related to appraisals.
- Please complete categories 5 (Other Questions) & 6 (Appliances) on the property questionnaire, which requires an appliance scan, a 2D photo of the manufacturer label, and a photo of the appliances.
- Clean your camera and fully charge your equipment (phone case, lens, rotator, tripod), and bring them with you (don’t forget the tape measure).
- Update the Asteroom app.
- Notify me when uploading is complete.
- Do not leave until I confirm no missing panoramas.
- Measure the primary bedroom door & camera height.
- Open all doors, including walk-in closets; capture showerheads, stair landings, hallways, and exteriors.
- For detached structures, capture four exterior and interior shots.
- Prioritize interior scans.
Show the on-site contact your Asteroom Virtual Property Data Collector ID.
Tap the 3-line icon on the upper left corner, go to "MyTasks," and press the icon in the upper right to display your ID.

Thank you and drive safe!
`,
  "pdr-reo-xpress-sundae": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

PDR: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

-Important-
New procedure to create the PDR album:
In the Asteroom app, tap the 3-line icon on the upper left corner, go to "MyTasks," press PDR/PDC and go to "matched".
Press the correct address/task ID and press the 3D Scan button there.
This is an Offerpad task:
- If you are with an agent/homeowner, please avoid any appraisal terms. They are not doing anything related to appraisals.
- Please complete categories 5 (Other Questions) & 6 (Appliances) on the property questionnaire, which requires an appliance scan, a 2D photo of the manufacturer label, and a photo of the appliances.
- Clean your camera and fully charge your equipment (phone case, lens, rotator, tripod), and bring them with you (don’t forget the tape measure).
- Update the Asteroom app.
- Notify me when uploading is complete.
- Do not leave until I confirm no missing panoramas.
- Measure the primary bedroom door & camera height.
- Open all doors, including walk-in closets; capture showerheads, stair landings, hallways, and exteriors.
- For detached structures, capture four exterior and interior shots.
- Prioritize interior scans.
Show the on-site contact your Asteroom Virtual Property Data Collector ID.
Tap the 3-line icon on the upper left corner, go to "MyTasks," and press the icon in the upper right to display your ID.

Thank you and drive safe!
`,
  "da-fannie-mae": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

DA: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

- Pls inform us ahead of time if you will be running late
- Wipe clean your camera and make sure your equipment is fully charged (Please don't forget your: Phone case, lens, rotator & tripod)
- Update your Asteroom application to the latest version
- Go to "My Task" and click the address for the task, it will automatically create an album and you can start shooting panoramas
- Please get the INTERIOR FIRST and then EXTERIOR AFTER
- Please let me know when you upload the panorama
- Please do not leave the property unless everything is good
- Measure the Primary bedroom door height and camera height.
- Open all doors including WALK IN closet. Make sure the shower head is seen and get Landing of stairs, Hallways, Exterior shots
- If there is a DETACHED GARAGE, please get the interior & the exterior of the garage
I recommend you bring a flashlight and take a quick look before entering. Thank you!
`,
  "da-rebuilt": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

DA: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

- Pls inform us ahead of time if you will be running late
- Pls open the electric panel and take a separate panorama of it
- Wipe clean your camera and make sure your equipment is fully charged (Please don't forget your: Phone case, lens, rotator & tripod)
- Update your Asteroom application to the latest version
- Go to "My Task" and click the address for the task, it will automatically create an album and you can start shooting panoramas
- Please get the INTERIOR FIRST and then EXTERIOR AFTER
- Please let me know when you upload the panorama
- Please do not leave the property unless everything is good
- Measure the Primary bedroom door height and camera height.
- Open all doors including WALK IN closet. Make sure the shower head is seen and get Landing of stairs, Hallways, Exterior shots
- If there is a DETACHED GARAGE, please get the interior & the exterior of the garage. I recommend you bring a flashlight and take a quick look before entering. Thank you!
`,
  "ei-nvs": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

EI: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

Here's a quick rundown of what we need from you (photos only, please):
- Street view, looking both left and right (2 photos)
- Front view of the property (1 photo)
- Side views of the property (if applicable, 2 photos)
- A photo to verify the address (1 photo)

Make sure that photos are:
- Landscape Orientation
- Photo Ratios should be 4:3 or 16:9

To upload the photos, here's a step-by-step guide:
- Tap the 3-line icon on the top left.
- Select "my tasks".
- Scroll to Exterior Inspections and press view all.
- Under matched, select the address.
- Click on the "appropriate lender for the task" under report link.

This is where you'll upload the photos. Remember, we're looking for landscape orientation in your shots.
Just a couple of additional notes:

- No need to approach the OSC.
- If the OSC does question you, let them know we're working with Champions Funding LLC (or the appropriate lender for the task).
- Assure them that this inspection is at NO COST to them.
- Please drop us a line when you arrive at the property and again when you start uploading the photos. I appreciate your cooperation!
`,
  "ei-solidifi": `
Please confirm receipt of this message:

Good day [DC Name]!

Just a gentle reminder regarding the site visit at:

EI: [Task ID]
Address:[Address]
Schedule: [Schedule]
Total Pay: $ [Total Pay]

Here's a quick rundown of what we need from you (photos only, please):
- Street view, looking both left and right (2 photos)
- Front view of the property (1 photo)
- Side views of the property (if applicable, 2 photos)
- A photo to verify the address (1 photo)

Make sure that photos are:
- Landscape Orientation
- Photo Ratios should be 4:3 or 16:9

To upload the photos, here's a step-by-step guide:
- Tap the 3-line icon on the top left.
- Select "my tasks".
- Scroll to Exterior Inspections and press view all.
- Under matched, select the address.
- Click on the "appropriate lender for the task" under the report link. This is where you'll upload the photos. 

Remember, we're looking for landscape orientation in your shots. Just a couple of additional notes:
- No need to approach the OSC.
- If the OSC does question you, let them know we're working with Bank of America
- Assure them that this inspection is at NO COST to them.
- Please drop us a line when you arrive at the property and again when you start uploading the photos. I appreciate your cooperation!
- Under Construction Signage, For Sale Signage, Security Bars, and Posted Citations should be photographed if present
`
};

// Function to replace placeholders in template with actual values
function fillTemplate(template, data) {
  return template.replace(/\[([^\]]+)\]/g, (match, key) => {
    return data[key.trim()] || "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const reminderType = form.dropdown1.value;
    const dcName = form.dcName.value.trim();
    const taskId = form.taskId.value.trim();
    const address = form.address.value.trim();
    const schedule = form.schedule.value.trim();
    const totalPay = form.totalPay.value.trim();

    const data = {
      "DC Name": dcName,
      "Task ID": taskId,
      "Address": address,
      "Schedule": schedule,
      "Total Pay": totalPay
    };

    const template = templates[reminderType];
    if (!template) {
      alert("Selected reminder type template is not defined.");
      return;
    }

    const output = fillTemplate(template, data);

    // Save the output to localStorage and redirect to output page with reminder type info
    localStorage.setItem('generatedReminder', output);
    localStorage.setItem('reminderType', reminderType);
    window.location.href = 'output.html';
  });
});
