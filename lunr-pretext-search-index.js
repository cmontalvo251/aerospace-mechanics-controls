var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "current-edition",
  "level": "1",
  "url": "current-edition.html",
  "type": "Section",
  "number": "1",
  "title": "Current Edition",
  "body": " Current Edition  This textbook was last updated on . The latest pdf can be found on Github while the most up to date web based version is on Github Pages .  A note on AI: Note that many sections have been written with the help of Github’s Copilot and even Google’s Gemini . Originially their were plans to properly cite each section that was written with the help of AI but the authors lost track given it’s seamless integration with VScode and Android smart phones as well as any browser at this point. As such, it is important to note that after September of 2025 it is safe to assume that most if not all sections were written with the help of AI. The authors are aware of the ethical implications of this issue however are rigorously check all sections and text to ensure that the content is correct and free of errors.  "
},
{
  "id": "manuscript-changes",
  "level": "1",
  "url": "manuscript-changes.html",
  "type": "Section",
  "number": "2",
  "title": "Manuscript Changes",
  "body": " Manuscript Changes    June 10th, 2020 - Magnetic Field Model section updated to reflect the difference between the East North Vertical and the North East Down reference frames. The Figure showing the magnetic field for an example Low Earth Orbit has also been update. Also added this page for manuscript changes and the following pages that list where this file can be found.  December 10th, 2020 - Moved to public Github Repo separate from MATLAB  December 30th, 2020 - Moved papers.bib to parent directory Added datetime to title page. Added section headers to RC aircraft design. Wrote text all the way through the airfoil selection. Added a references section.  December 31st, 2020 - Finished RC aircraft section.  September 30th, 2021 - Renamed report to Aerospace Mechanics and Controls  December 21st, 2021 - Moved CubeSAT abstract to introduction on CubeSATs. Imported entire Aircraft Mechanics textbook into here  December 22nd, 2021 - Added a section on GNC design for CubeSats. Added acknowledgements section.  June 2nd, 2022 - Added some items to changes needed and fixed two references  July 30th, 2022 - Included a derivation of direct measurement of Euler Angles using an IMU.  July 31st, 2022 - Added GPS coordinate conversion to cartesian coodinates as well as heading angle and speed estimation from GPS.  October 27th, 2022 - Added computation of lat, lon, alttiude to ECI frame.  March 20th, 2024 - Added a Current Edition section above Manuscript Changes. Also added color to hyperlinks  May 7th, 2024 - Added a battery sizing section to the aircraft design chapter  July 20th, 2024 - separated sections into separate files...Also started adding the quacopter aerodynamic model  July 22nd, 2024 - Finished the quadcopter aerodynamics section and made a quick edit to the GNC aircraft PID control scheme  December 23rd, 2024 - Added a better description to the gravity model to explain the vector notation of the equations  January 6th, 2025 - A title change was performed for the GPS to Cartesian coordinate transform. Also made orbital elements its own section.  January 9th, 2025 - Edited the position of different sections so that it's ready for the linear controls section  May 13th, 2025 - Added drag equation to aerodynamics  September 7-8th, 2025 - Used Github's copilot on the Mobile App to create the first order example of a differential equation. Also used Gemini as well to create the second order example. I also added a citation for Gemini in the papers.bib file. I also edited the foreword to include a note on AI since from here on out I will use it to help write many sections of this manuscript.  September 10th, 2025 - Added the equations of motion for a second order mass spring damper system.  September 28th, 2025 - Moved the section on numerical integration to be before the LTI section since it makes more sense to have it there. Also added the second order solution showing underdamped, overdamped and critically damped solutions.  September 29th, 2025 - Added the time response section for first order systems and finished the derivation of first and second order systems.  September 30th, 2025 - added more section headers to the LTI section to make it easier to navigate.  October 10th, 2025 - Split the LTI Controls section into its own file and started writing the feedback control section.  October 11th, 2025 - Added the attitude dynamics of a satellite\/quadcopter section. Also rearranged the sections overall  October 12th, 2025 - Finished the rocket dynamics equations and started on the stability section.  October 13th, 2025 - Added the pitch dynamics of an aircraft  October 14th, 2025 - Finished the dynamics section of LTI systems and am working on the time response section now  October 15th, 2025 - Added the week by week schedule for the project based learning section  October 18th, 2025 - Added the code for simulating the mass spring damper system  October 19th, 2025 - Added stability sections for mass spring damper and the car velocity\/position  October 20th, 2025 - Added the time response and stability sections for the quadcopter\/satellite attitude dynamics  October 21st, 2025 - Split the lti section again so that's it's easier to read. Also finished the pitch dynamics of an aircraft.  October 22nd, 2025 - Added the rocket response and stability section.  October 24th, 2025 - Added the pendulum response and stability section  December 5th, 2025 - Fixed the aircraft dynamics equations as there was a sign error. Updated changes needed onto Github.  August 18th, 2026 - Started the conversion from LaTeX to PreTeXt.    "
},
{
  "id": "future-changes",
  "level": "1",
  "url": "future-changes.html",
  "type": "Section",
  "number": "3",
  "title": "Changes Needed and Future Project Ideas",
  "body": " Changes Needed and Future Project Ideas  Needed changes and Future Project Ideas are now tracked on Github  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   When I first set out to write this textbook I originally was working for NASA back in 2017 and learned a whole lot about orbital mechanics, satellites and especially CubeSats. Since then I've decided to include dynamics for particles, aircraft, quadcopters and many other aerospace vehicles. Taking input from other colleagues I've also added my project based engineering format for both hobbyist aircraft design and rocket design. The textbook then contains linear systems theory and some more advance control techniques and will probably end up with many other topics in aerospace mechanics and controls. This textbook is intended to be the pinnacle of my aerospace engineering knowledge as I transition to my new focus of maritime engineering specifically in the Mobile Bay.  In order to maintain consistency I've decided to include the original introduction that I wrote over 10 years ago which only discusses the CubeSat and its attitude determination and control subsystem (ADACS). The original introduction is included below:  A CubeSAT is a small satellite on the order of 10 centimeters along each axis. A 1U satellite is a small cube with 10 cm sides. These satellites are used for a variety of missions and created by a variety of different organizations. When deployed from a rocket, a CubeSAT may obtain a large angular velocity which must be reduced before most science missions or communications can take place. Maximizing solar energy charging also involves better pointing accuracy. To control the attitude of these small satellites, reaction wheels, magnetorquers and even the gravity gradient are used in low earth orbit (LEO) while reaction control thrusters are typically used in deep space. On a standard LEO CubeSAT, 3 reaction wheels are used as well as 3 magnetorquers. In the initial phase of the CubeSAT mission, the magnetorquers are used to reduce the angular velocity of the satellite down to a manageable level. Once the norm of the angular velocity is low enough, the reaction wheels can spin up reducing the angular velocity to zero. At this point a Sun finding algorithm is employed to find the Sun and fully charge the batteries. In LEO two independent vectors are obtained, the Sun vector and the magnetic field vector, to determine the current attitude of the vehicle which is typically called attitude determination. Other sensors such as horizon sensors, star trackers and even lunar sensors can be used to obtain the quaternion of the vehicle. This paper investigates the necessary mathematics to understand the intricacies of guidance, navigation and control specifically discussing the attitude determination and controls subsystem (ADACS).   "
},
{
  "id": "nomenclature",
  "level": "1",
  "url": "nomenclature.html",
  "type": "Chapter",
  "number": "2",
  "title": "Nomenclature",
  "body": " Nomenclature    - components of the mass center position vector in the inertial frame (m)  - Euler roll, pitch, and yaw angles (rad)  - quaternions  - components of the mass center velocity vector in the body frame (m\/s)  - components of the mass center angular velocity vector in the body frame (rad\/s)  - angular velocity vector of the vehicle in the body frame (rad\/s)  - rotation matrix from frame I to frame B  - relationship between angular velocity components in body frame and derivative of Euler angles  - mass (kg)  - mass moment inertia matrix about the mass center in the body frame ( )  - components of the total force applied to CubeSAT in body frame (N)  - components of the total moment applied to CubeSAT in body frame (N-m)  - position vector from a generic point A to a generic point B (m)  - velocity vector of a generic point A with respect to a generic frame B (m\/s)  - skew symmetric matrix operator on a vector. Multiplying this matrix by a vector is equivalent to a cross product  - components of the total force applied to aircraft in body frame (N)  - components of the total moment applied to aircraft in body frame (N-m)  - total weight force applied to aircraft (N)  - Lift and Drag on Aircraft (N) - Not to be confused with Roll moment  - gravitational constant on Earth ( )  - atmospheric density ( )  - reference area of wing on aircraft ( )  - Wingspan of aircraft (m)  - mean chord of wing on aircraft (m)  - Angle of attack (rad)  - Slideslip angle (rad)  - Lift, Drag and Pitch Moment coefficients  - thrust, aileron, rudder, and elevator control inputs (rad)  - skew symmetric matrix operator on a vector expressed in the body frame.  - proportional, derivative, and integral control gains  - Total airspeed (m\/s)  - Non-dimensional angular velocities  - Distance from center of mass to aerodynamic center of the tail (m)  - Distance from aerodynamic center of main wing to aerodynamic center of tail (m)  - zero lift angle of attack (rad)  - Zero angle of attack lift coefficient  - Pitch moment curve slope versus  - Lift curve slope  - Pitch damping coefficient  - Pitch moment curve slope versus elevator deflection angle  - Speed of sound (m\/s)  - Viscosity of Fluid ( )    "
},
{
  "id": "sec-systems-of-particles",
  "level": "1",
  "url": "sec-systems-of-particles.html",
  "type": "Section",
  "number": "3.1",
  "title": "Systems of Particles",
  "body": " Systems of Particles  For this formulation we start with Newton's Second Law with no approximations. Similar dynamic forumlations can be found in , , , and .     where is the momentum of a particle. is a force on the particle. The statement above states that sum of all forces on a particle is equal to the time rate of change of momentum. If two particles are then considered the equation can be written for both particles.     Note that the forces and are internal forces experienced by each particle exerted on each other since they are rigidly connected. Newton's Third Law states that for every action there is an equal and opposite reaction. That is, . Thus, if both equations are added the following equation is created     where is the number of particles. Typically the double summation in is written just as .  "
},
{
  "id": "sec-rotational-dynamics",
  "level": "1",
  "url": "sec-rotational-dynamics.html",
  "type": "Section",
  "number": "3.2",
  "title": "Rotational Dynamics for Systems of Particles",
  "body": " Rotational Dynamics for Systems of Particles  Note that by construction, a system of particles rigidly connected can now rotate about a center point. The center of mass of a system of particles can be defined using the relationship below     where     This vector can then be used to create rotational dynamics starting with the linear dynamics.     where is the skew symmetric matrix of the vector from the center of mass to the particle which results in a cross product. The skew symmetric operator is denoted by .     "
},
{
  "id": "sec-translational-dynamics",
  "level": "1",
  "url": "sec-translational-dynamics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Translational Dynamics",
  "body": " Translational Dynamics  Using all of these simplifications, the momentum term on the right can be simplified to     The derivation of the term above starts by deriving the position of the center of mass as the following equation.     Taking one derivative results in the following equation     where is the skew symmetric matrix of the angular velocity vector which results in a cross product. This equation comes from the derivative transport theorem. Since the body is a rigid body the term resulting in the equation below     which any dynamicist knows as the equation for two points fixed on a rigid body. This equation can then be substituted into the equation for momentum such that.     The first term reduces to     the second term reduces to zero since the sum of all particles from the center of mass is by definition the center of mass and thus zero.     Plugging this result for momentum into Newton's equation of motion yields. This is typically called Newton-Euler equations of motion.     "
},
{
  "id": "s_rotational_motion",
  "level": "1",
  "url": "s_rotational_motion.html",
  "type": "Section",
  "number": "4.2",
  "title": "Rotational Dynamics",
  "body": " Rotational Dynamics  Plugging in the expression for two points fixed on a rigid body results in a much different expression. First let's expand the rotational dynamic equations of particles using the assumptions made for a rigid body.     Then the equation of two points fixed on a rigid body can be introduced to obtain the following equation     expanding this into two terms yields     To simplify this further a useful equality is used for cross products. That is . The equation above then changes to     Notice, that parentheses were placed around the first term to isolate the angular velocity. This is because the angular velocity is constant across the system of particles. The term on the right has also been altered slightly to isolate the fact that the velocity of the center of mass is independent of the system of particles. With the equation in this form it is easy to see that the term on the right is zero because it is the definition of the center of mass. The equation then reduces to     Notice again that minus sign has been removed. The skew symmetric matrix has an interesting property where the transpose is equal to the negative of the original matrix. The term in brackets is a well known value for rigid bodies and is known as the moment of inertia for rigid bodies.     This results in the kinematic equations of motion for rigid bodies to the simple equation below.     With the equation in this form it is finally possible to carry out the derivative     The first term requires the chain rule to perform the derivative and can thus result in a time varying moment of inertia matrix and the derivative of angular velocity. Therefore the equation can simply be written as     "
},
{
  "id": "sec-inertia-estimation",
  "level": "1",
  "url": "sec-inertia-estimation.html",
  "type": "Section",
  "number": "4.3",
  "title": "Inertia Estimation",
  "body": " Inertia Estimation  There are several equations that can be used to compute the moment of inertia depending on the geometry of the vehicle. For this example we will look at a cuboid to demonstrate inertia calculations. Firstly, the total mass and size (length , width , and height ) are required.     Where is the cuboid’s moment of inertia around the x-axis, It can be seen that the moment of inertia about the y and z-axis are computed similarly, but by using different length parameters. Note that cross products of inertia are obtained by using the parallel axis theorem often caused by solar panels on satellites or payloads on aircraft and quadcopters.  "
},
{
  "id": "sec-aerospace-convention",
  "level": "1",
  "url": "sec-aerospace-convention.html",
  "type": "Section",
  "number": "4.4",
  "title": "Aerospace Convention",
  "body": " Aerospace Convention  Aerospace convention involves using the Newton-Euler equations of motion to describe the vehicle as explained in the previous section. Typically the position of the vehicle is written as     The derivative of the position vector is the velocity vector is then written as     However, body frame coordinates are typically used to describe the velocity vector such that     In order to relate the body frame components of the velocity vector the inertial frame coordinates a transformation matrix is used to give the following equation.     Note that standard aircraft forces and moments are applied to the body. The forces are typically written as X,Y and Z while the moments are given as L,M and N. They can be written in component form using the equations below.        "
},
{
  "id": "s_Euler_Angles",
  "level": "1",
  "url": "s_Euler_Angles.html",
  "type": "Section",
  "number": "5.1",
  "title": "Euler Angles",
  "body": " Euler Angles   Euler angle are used to describe 3 unique rotation from the inertial to body frame. They are typically denoted as , and . The order of the rotation can vary however the 3-2-1 sequence is standard for aircraft while the 3-1-3 sequence is standard for spacecraft.    3-2-1 Sequence  The transformation from the inertial frame to the body frame involves three unique rotations. The first is a rotation about the z-axis such that     this rotation is called the yaw or heading rotation. Note that the matrix is a matrix that rotates a vector from the A frame to the inertial frame. The transpose of this matrix rotates a vector from the inertial frame to the A frame. From here the intermediate frame (A frame) is rotated about the y-axis such that     this rotation is called the pitch angle rotation. Finally the (NR) no roll frame is rotated through the x-axis such that     A Figure of this is shown below.   Six Degree of Freedom Schematic    Putting all of these 2-D rotations together creates a transformation matrix from body to inertial.     Note again that the inverse of this matrix is given below using the properties of matrix transposes. Standard shorthand notation is used for trigonometric functions: , , and .       Derivatives  If Euler angles are used to parameterize the orientation, the derivative of Euler angles is somewhat cumbersome to obtain. The angular velocity of a body is typically written as     There are no inertial components for the angular velocity vector. However, a relationship can be derived relating the derivatives of the Euler angles. The angular velocity can be written in vector form such that     relating the unit vectors and to the body frame using the planar rotation matrices results in the equation below. Note that NR is denoted as the No-Roll frame.     where       Screw Rotation  It is often useful to extract Euler Angles from a unit vector. A unit vector has two degrees of freedom and thus has two rotations and which can be determined using the equation below where denotes the first component of the vector in the body frame.       Transformation Matrix to Euler Angles  Besides using unit vectors, sometimes it is beneficial to extract Euler angles from a known tranformation matrix. The equations below can be used to accomplish this where is the ith row and jth column of the matrix where       "
},
{
  "id": "fig-6dof-rocket-schematic",
  "level": "2",
  "url": "s_Euler_Angles.html#fig-6dof-rocket-schematic",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Six Degree of Freedom Schematic   "
},
{
  "id": "s_quat",
  "level": "1",
  "url": "s_quat.html",
  "type": "Section",
  "number": "5.2",
  "title": "Quaternions",
  "body": " Quaternions   It is well known that equations of motion produced by using only three orientation parameters results in a singularity . As such, the orientation of the vehicle can be parameterized using four parameters known as quaternions. Many supplemental equations and explanations can be found for quaternions in , , , , , , , . I also recommend visiting an interactive visualization tool made by popular YouTube star Ben Eater .    The General Quaternion  To begin, The standard quaternion is written below.     In this case 4 parameters are used to denote the quaternion. In order to get a physical understanding of what a quaternion is imagine a vector in 3-D space. The rotation from the body to the inertial frame is then the rotation of the inertial frame about the unit vector through angle . The quaternion can then be written as     In this case it is possible to obtain the individual quaterions as and . Furthermore, if given 4 quaternions, the angle is simply and . Note that because a quaternion is essentially screw rotation about a known unit vector, there are two identical quaternions for every orientation. That is .    Quaternion Transformations  In order to rotate the inertial frame to the body frame using quaternions, the transformation matrix is shown below. Note that .       Euler to Quaternion Transformations  In the event Euler angles are need, converting quaternions to Euler angles is a standard operation and shown below.     It is also possible to convert Euler angles to quaternions using the equations below.       Quaternion Operations  The norm of the quaternions is given by . In standard spacecraft applications, the norm of the quaternion is just 1. The conjugate of the quaternion is given below.     The inverse of a quaternion is then just . Determining the difference between two quaternions is done using the quaternion difference operation as shown below where  .       Quaternion Derivatives  The derivatives of a quaternion are written in shorthand using the equation below.     The operators and are shown below. Note that operates on a vector and on a vector. In this case .        These vector operators can then be used to expand the kinematic derivatives as shown by equation .     where are the four quaternions and are the components of the angular velocity vector in the body frame.   "
},
{
  "id": "translational-eoms",
  "level": "1",
  "url": "translational-eoms.html",
  "type": "Section",
  "number": "6.1",
  "title": "Translational Equations of Motion",
  "body": " Translational Equations of Motion  The translational equations of motion of satellites are fairly simple given that everything is written in the inertial frame. The position vector of the vehicle is and the velocity is . The acceleration of the vehicle is found by summing the total forces on the body and dividing by the mass of the vehicle. In the equation below is the number of planetary bodies acting on the vehicle while is the force imparted by thrusters.     Note that for a spacecraft the magnitude of the gravitational acceleration vector is on the order of . Sources point to solar radiation pressure being on the order of  . For a 1U CubeSat (10 cm x 10 cm) the force would be equal to . A 1U CubeSat has a nominal mass of 1 kg which would accelerate the CubeSat on the order of , which is considerably less than gravitational acceleration. Furthermore, using the standard aerodynamic drag equation ( ), where conservative estimates are used, the aerodynamic force at 600 km above the Earth's surface would be about  . This assumes a density equal to , a velocity equal to , and a drag coefficient equal to 1.0 . A force this small would impart an acceleration of about which is also considerably less than gravitational acceleration. These forces cannot be neglected for longer missions but can be ignored where appropriate. For an aircraft and quadcopter the equations of motion are typically written in the body frame. As such the derivative transport theorem is used and the translational equations of motion are written as the following.     "
},
{
  "id": "reaction-wheels",
  "level": "1",
  "url": "reaction-wheels.html",
  "type": "Section",
  "number": "6.2",
  "title": "Reaction Wheels",
  "body": " Reaction Wheels  The reaction wheel model must be included before the attitude dynamics because they directly affect the inertia of the vehicle. There are three reaction wheels on this vehicle and each one has it's own angular velocity and angular acceleration . The inertia of each reaction wheel is first written about the center of mass of the reaction wheel and is given by the equation below where the reaction wheel is modeled as a disk with finite radius and height . The subscript is used to denote that this inertia matrix is about the center of mass of the reaction wheel while the super script is used to denote the frame of reference.     In order to rotate the inertia matrix into the vehicle body frame of reference an axis of reaction wheel rotation is used. The vector is used to denote the axis about which the reaction wheel rotates. Euler Angles and can be extracted from this unit vector as discussed previously in Section . The rotation matrix can then be generated using equation . This matrix can then be used to compute the inertia of the reaction wheel in the vehicle body frame.     The parallel axis theorem can then be used to shift the inertias to the center of mass of the vehicle where the subscript denotes the reaction wheel inertia taken about the center of mass of the vehicle.     The vector is the distance from the center of mass of the vehicle to the center of mass of the reaction wheel in the vehicle body reference frame. The total inertia of the entire vehicle-reaction wheel system is then just a sum of all the reaction wheel inertias.     The total angular momentum of the vehicle is then equal to the following equation where is the angular velocity of the vehicle.     In a similar fashion, the total torque placed on the vehicle is equal to the following     It is typically assumed that the angular acceleration of each reaction wheel can be directly controlled. However, as the reaction wheel angular velocity increases, the maximum angular acceleration allowed begins to decrease. Once the reaction wheel reaches its angular velocity limits, the angular acceleration possible drops to zero. This is called reaction wheel saturation and must be dealt with using a method called momentum dumping.  "
},
{
  "id": "attitude-eoms",
  "level": "1",
  "url": "attitude-eoms.html",
  "type": "Section",
  "number": "6.3",
  "title": "Attitude Equations of Motion",
  "body": " Attitude Equations of Motion  The attitude equations of motion are formulated assuming the vehicle can rotate about three axes. The derivative of angular velocity is found by equating the derivative of angular momentum to the total moments placed on the vehicle while reaction wheel torques from the vehicle are added ( ).     The applied moments use subscripts for propulsion, for magnetorquers, and for reaction wheels. The term is the change in inertia in the body frame caused by deployment of solar panels and\/or antenna. Also, recall that is the total angular momentum of the entire vehicle including the reaction wheels if present. For aircraft the rotational dynamic equation can be found as     "
},
{
  "id": "s_llh_to_cartesian",
  "level": "1",
  "url": "s_llh_to_cartesian.html",
  "type": "Section",
  "number": "7.1",
  "title": "GPS Coordinates to Cartesian Coordinates (Flat Earth Approximation)",
  "body": " GPS Coordinates to Cartesian Coordinates (Flat Earth Approximation)  All external models below imply a spherical world with an Earth Centered Inertial (ECI) frame at the center of the planet. However, often times for small UAV applications it is useful to convert the GPS coordinates (latitude, longitude, altitude, ) to a flat earth approximation where the x-axis is pointing North, the y-axis is pointing east and the z-axis is pointing towards the center of the planet. This is similar to spherical coordinates which is explained later on but in this case the axis system is cartesian rather than spherical. This is useful in obtaining the position of the vehicle which can be used to approximate heading and speed which again is explained in another section. The equations to convert LLH (latitude,longitude, altitude) to a cartesian coordinate system are given below. Note that these equations assume that the vehicle creates an origin point to define as the center of the inertial frame which is on the surface of the planet rather than the center of the planet . Typically when the vehicle gets its first valid GPS coordinate, that point is set as the origin.     In the equation above which essentially converts degrees from the LLH coordinates first to nautical miles and then to feet and then to meters. For example, if the vehicle moves North 1 degree that is equivalent to 60 nautical miles on the surface. Vice versa, 1 nautical mile on the surface is equal to one minute or a 60th of a degree in latitude. The conversion from nautical miles to feet is 6076.11548556 and feet to meters is 0.3048. Note that often time is is good to convert the cartesian coordinates back to LLH coordinates. That inversion is shown below.           "
},
{
  "id": "sec-density-model",
  "level": "1",
  "url": "sec-density-model.html",
  "type": "Section",
  "number": "7.2",
  "title": "Density Model",
  "body": " Density Model  The density model is simply given as an exponential model.     where is the density at sea-level, is the altitude above the Earth in kilometers and is known as the scale height , , .  "
},
{
  "id": "s_magnetic_field",
  "level": "1",
  "url": "s_magnetic_field.html",
  "type": "Section",
  "number": "7.3",
  "title": "Magnetic Field Model",
  "body": " Magnetic Field Model  The Magnetic Field model used in this simulation stems from the Enhanced Magnetic Field Model (EMM2015) ( ). The Earth's magnetic is a complex superposition of multiple sources including the inner core and outer core of the planet. Models have been created that use spherical harmonics to compute the magnetic field at any location around the Earth. The EMM2015 model uses a 720 order model increasing the spatial resolution down to 56 km. This model was compiled from multiple sources including but not limited to satellite and marine data. It also includes data from the European Space Agency's Swarm satellite mission. In order to include this harmonic mesh data into this simulation, the GeographicLib module written in C++ is included in the simulation ( ). Note that I take no credit for this model. This section only serves to explain the model. The result of utilizing this model is the ability to provide any position coordinate of the satellite to the module and have the model return the magnetic field strength in East, North, Vertical Coordinates. Specifically, the inputs to the model are the position of the satellite assuming an inertial frame with the z-axis pointing through the north pole and the x axis pointing through the equator at the prime meridian as seen in Figure . This is known as the Earth-Centered Inertial (ECI) coordinate system ( ).    Earth-Centered Inertial Frame and Spherical Coordinate Frame   In order to connect these inertial coordinates ( ) to be used in the EMM2015 model, the latitude, longitude and height above the surface of the Earth are required. To do this, the coordinates are converted into spherical coordinates using the equations below.     Note that are related to latitude and longitude coordinates but not quite the same. In order to obtain the latitude and longitude coordinates the following equations are used. The height is simply the distance from the center of the ECI frame minus the reference height from the approximation of Earth as an ellipsoid ( ). Note that the angles from Equation are converted to degrees.     The inputs to the EMM2015 model are the latitude, longitude and height. The inverse of the above two equations are given below. These would be used in the event a latitude and longitude coordinate is given and there is a need to obtain the x,y and z coordinates in the ECI frame. The first step is to convert latitude, longitude and altitude and convert that to standard spherical angles and distance from the center of the planet.     Once that is complete the extraction of x,y and z are computed by the equation below.     The output from the EMM2015 model is in the East, North, Vertical (ENV) reference frame where the x-axis is East pointing in the direction of the rotation on the Earth, the y-axis is North pointing towards the North pole and finally the z-axis is the Vertical component that is always pointing radially away from the center of the Earth. In order to get the coordinates into the ECI frame the coordinates must first me converted to the North, East, Down reference frame (NED). In this case the x-axis is pointing North, the y-axis pointing East and the z-axis is always pointing towards the center of the Earth and called Down. The equation to rotate from the ENV frame to NED frame is shown below.     Once the magnetic field is in the NED reference frame it can then be rotated to the inertial frame using the following equation where is the magnetic field in the NED coordinate system and is the magnetic field in the inertial frame.     The matrix represents the transformation matrix from the spherical reference frame to the inertial reference frame. Note that there is no rotation about the x-axis through and the pitch rotation is augmented by because of the switch between North, East, Down (NED) and the z-axis of the ECI pointing through the North pole. The result of these equations, is the ability to obtain the magnetic field across an entire orbit. Figure shows an example 56 degree inclination orbit, 600 km above the Earth's surface. The orbit begins with the satellite above the equator and the prime meridian and assumes the Earth does not rotate.    Example 56 Degree Inclination Orbit at 600 km above Earth's Surface   Figure shows the magnetic field during the orbit in the inertial frame. PCI stands for Planet Centered Inertial which in this case is the same as the ECI frame since the planet is Earth.    Magnetic Field of Earth in Inertial Frame for 56 Degree Orbit at 600 km Above Surface   For a satellite in LEO, the spacecraft will experience a magnetic dipole moment. The magnetic dipole moment is caused by noting that the structure of the satellite is metal with current that creates its own magnetic field. The magnetic dipole moment torque is given by computing the torque produced by the magnetic field of the Earth interacting with the metallic structure of the satellite. First the dipole constant is the assumed value for torque as a function of Tesla in LEO. This constant is derived by assuming the torque from this disturbance at 500 km above the surface is the same as the solar radiation torque. Using this constant, the torque is given by the equation below where is the magnetic field strength of Earth in the inertial frame. The direction of the torque is assumed to be in the same direction of the magnetic field since the structure is not fully modeled. Although not accurate, the goal is to approximate the magnitude as closely as possible.     "
},
{
  "id": "f_spherical",
  "level": "2",
  "url": "s_magnetic_field.html#f_spherical",
  "type": "Figure",
  "number": "7.3.1",
  "title": "",
  "body": "  Earth-Centered Inertial Frame and Spherical Coordinate Frame  "
},
{
  "id": "f_orbit",
  "level": "2",
  "url": "s_magnetic_field.html#f_orbit",
  "type": "Figure",
  "number": "7.3.2",
  "title": "",
  "body": "  Example 56 Degree Inclination Orbit at 600 km above Earth's Surface  "
},
{
  "id": "f_mag_orbit",
  "level": "2",
  "url": "s_magnetic_field.html#f_mag_orbit",
  "type": "Figure",
  "number": "7.3.3",
  "title": "",
  "body": "  Magnetic Field of Earth in Inertial Frame for 56 Degree Orbit at 600 km Above Surface  "
},
{
  "id": "sec-gravitational-models",
  "level": "1",
  "url": "sec-gravitational-models.html",
  "type": "Section",
  "number": "7.4",
  "title": "Gravitational Models",
  "body": " Gravitational Models  Three types of gravitational models can be used. The first is the Newtonian gravitational model that assumes all planets are point masses with no volume. The result of the gravitational field vector is then     where is the gravitational constant, denotes the planet applying the gravitational field, is the mass of the planet, is the mass of the satellite and is a distance vector from the center of the planet to the satellite. The vector is just the unit vector of while is the magnitude of .     In component form, . Substituting that component form into the two equations above results in the component form of the gravity model which can be better suited for non-vectorized programming syntax.     The second gravitational field model stems from the Earth Gravity Model (EGM2008) which can also be found in the GeographicLib module . This model compute's Earths gravitational field at any point in three dimensional space. The model takes in coordinates in the ECI frame and returns the gravitational acceleration in the ECI frame thus no rotation is required. Just like the EMM2015 model this model uses spherical harmonics and a reference ellipsoid. The reference ellipsoid is then updated with gravity disturbances such as non-uniform geoid heights. This model is an upgrade from EGM84 and EGM96 which only used models of order 180 and 360 respectively. The EGM2008 model as a comparison uses a model of order 2190. Figure shows the gravitational acceleration vector during a 56 degree orbit at 600 km above the Earth's surface. The x-axis has been non-dimensionalized to represent the entire orbit. Thus when the x-axis is equal to 100 the satellite has completed one orbit.    Gravitational Field of Earth in Inertial Frame for 56 Degree Orbit at 600 km Above Surface   For a satellite in LEO, the vehicle will experience a gravity gradient torque. The gravity gradient torque is given by computing the gravitational force at one end of the satellite and the other denoted as and for bottom and top respectively. The torques are then crossed with the distance from the center of mass to the top of the satellite. It is assumed that the satellite is symmetric and thus, the torque is just the difference between the two forces crossed with the vector from the CG to one side of the satellite.     The third gravitational field model assumes the vehicle is close to the surface such as a quadcopter or aircraft. In this case the gravitational field is held at a constant and equal to .     "
},
{
  "id": "f_grav_orbit",
  "level": "2",
  "url": "sec-gravitational-models.html#f_grav_orbit",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": "  Gravitational Field of Earth in Inertial Frame for 56 Degree Orbit at 600 km Above Surface  "
},
{
  "id": "sec-solar-radiation",
  "level": "1",
  "url": "sec-solar-radiation.html",
  "type": "Section",
  "number": "8.1",
  "title": "Solar Radiation Pressure",
  "body": " Solar Radiation Pressure  Solar radiation pressure is relatively constant at 1 AU and thus is simply given as . The force is then found to be just the pressure multiplied by the frontal area of the satellite. The torque, similar to the aerodynamic torque, is the force crossed with a distance vector from the center of mass to the center of pressure of solar radiation. The vector is a unit vector denoting the direction of the sun.    "
},
{
  "id": "sec-propulsion-model",
  "level": "1",
  "url": "sec-propulsion-model.html",
  "type": "Section",
  "number": "8.2",
  "title": "Propulsion Model",
  "body": " Propulsion Model  In order for a vehicle to lift off to enter space, engineers must be able to apply a force that is greater than the force acting on the vehicle due to gravity and aerodynamics. The applied force is known as thrust. Thrust can be generated by the propulsion system of the vehicle. Electric and chemical are two well-known methods to produce thrust which take advantage of Newton’s third law of motion.  Electric Propulsion Systems typically use electric heating or electric or magnetic fields to accelerate propellants (usually gases). These systems can be very fuel-efficient, however it does not generate enough thrust. These engines are great for deep space exploration where transit times can be very long and rapid maneuvers are not required[ ].  Chemical propulsion systems are more effective in our environment. These systems involve the use of chemical reactions to release energy and accelerate gases to produce thrust. Chemical propulsion is a broad category and can be subdivided into liquid propulsion, solid propulsion, and hybrid propulsion.  Liquid propulsion systems can be further subdivided into either a monopropellant (a single propellant fluid) or a bi-propellant (two fluids, which includes fuel and an oxidizer). The simplest form of fuel and oxidizer would be liquid hydrogen and liquid oxygen. Typically, the propellants may be kept on board and fed from high-pressure tanks (pressure-fed) or use turbopumps to move the propellant to the combustion chamber (pump-fed) before the hot exhaust exits the nozzle. Liquid Propulsion systems can produce a wide range of thrust, can have high specific impulse (Isp), and can be easily controlled; but often must be fueled shortly prior to launch.  On the contrary, solid rocket motors (or SRMs) are simple devices. The propellants, the fuel and oxidizer, are mixed together and stored in a cylinder. An electrical signal is sent to the igniter which creates hot gases to ignite the main propellant grain. By converting the high thermal energy of the gases into kinetic energy, therefore thrust is developed. These motors usually have a relatively short burn time. For example, The Thiokol motor using ammonium perchlorate\/aluminum as propellant, has a burn time of 75 s with a thrust of 3,300,000 lb.  Even though solid rocket motors are simple and can be ignited in a moment's notice, their Isp (specific impulse) is generally lower than liquid systems. Also, they cannot be readily throttled. Once ignited, the motor will burn to extinction[ ].  It is important to note, however, that if propulsion is needed for the spacecraft it is necessary to work with the propulsion team to determine the , mass flow rate, and attitude control. For this analysis each satellite is equipped with thrusters that have a fixed . The mass flow rate of each thruster is given by the equation below where is the force of the thruster.   Each thruster is either on or off as given by the variable which is either a 1 or a 0. When the thruster is on, the force applied is equal to and when the thruster is off the thrust applied is equal to zero. Thus in this fashion to total mass flow rate per unit time of the entire satellite is just a sum of all the pulses.   It is assumed that the time response of the thrusters is instantaneous during power up and power down. There is a delay between pulses and the thrusters only stay on for a fixed time thus the thrusters are pulsed in a square wave fashion with a certain duty cycle. The force applied is simply equal to the force times a unit vector that is aligned with the axis of the thruster. The total force applied to each satellite is then given by the formula below.   The total moment applied to the satellite is simply the force applied crossed with a vector from the center of mass of the satellite to the center of mass of the thruster.   Note that the total thrust equation is given as   where is the exhaust velocity, is the area of the nozzle, and and are the pressures at the exit of the nozzle and the ambient environment. It's easy to see that the thrust at sea-level would be lower than the thrust in a vacuum since is much higher at sea-level and almost zero in a vacuum. For typical hobbyist rockets it is assumed that and thus the thrust is simply equal to . The exit velocity is given as where is the standard gravity of . This means that the mass flow can be given as   which is similar to the equation explained above. Now in order to obtain the delta V of the satellite, the rocket equation is used. The rocket equation is given as   where the sum of the forces is equal to the time rate of velocity. Replacing the left side of the equation with the thrust equation gives   Note that mathematically the mass flow rate is negative since the mass of the satellite is decreasing as the propellant is being expelled which is why a minus signs was added. We can then combine like terms and cancel out the dt on both sides to obtain   Note that mathematicians would scoff if they read that we are dividing dt since dt is infinitesmially small and cancelling out the dt is similar to dividing by zero. The proper way to \"cancel\" the dt term would be to perform a change of variables but ultimately you arrive at the same solution. Thus an an engineer I would say \"close enough. just like an aymptote.\" Where a mathematician would say \"an asymtote never approaches zero\" an engineer like myself would say \"but it's basically zero\" and move on. So, moving on, integrating both sides gives   which reduces to   where the minus sign was removed by inverting the mass ratio which is a property of natural logarithms. The equation above is the standard rocket equation cited in many textbooks and sources [ , ].  "
},
{
  "id": "sec-magnetorquer-model",
  "level": "1",
  "url": "sec-magnetorquer-model.html",
  "type": "Section",
  "number": "8.3",
  "title": "Magnetorquer Model",
  "body": " Magnetorquer Model  The magnetorquer model assumes that three magnetorquers are aligned in such a way that the magnetic moment produced by each magnetorquer is aligned with the principal axes of the body frame of the satellite. Each magnetorquer is controlled independently such that which is the applied current in each magnetorquer. The magnetic moment is then given by the equation below   where is the number of turns in the coil of each magnetorquer and is the area of the magnetorquer. For simplicity it is assumed that all magnetorquers have the same area and same number of turns. The torque produced by all magnetorquers is then simply found by crossing the magnetic moment with the magnetic field of the Earth in the Body reference frame.   In order to obtain the magnetic field vector in the body frame, the inertial magnetic field vector must be rotated into the body frame of the satellite. In component form, equation ( ) reduces to the following equation using the identity that    where are the components of the magnetic field in the body frame of the satellite. The moments are thus the control torques that rotate the satellite as seen in equation ( ).  "
},
{
  "id": "s-aerodynamics",
  "level": "1",
  "url": "s-aerodynamics.html",
  "type": "Section",
  "number": "8.4",
  "title": "Aerodynamics",
  "body": " Aerodynamics   Aerodynamics are typically written using a taylor series expansion about a trim point[ ][ ]. That is, the aerodynamic forces are given by   where . The partial derivative is thus expanded such that   To find all of the partial derivative the forces are first written using a combination of dynamic pressure and coefficients that are functions of geometry and Reynolds number rather than speed, pressure and size. A general lift force can be written using the equation below   where is the atmospheric density, is the free-stream velocity, S is the planform area of the lifting surface and is the lift coefficient.   The subscript 'a' above denotes the velocity of the vehicle plus the atmospheric disturbance.   Note that the dynamic pressure is different for vehicles other than aircraft. Note that the general form for drag is also very similar and can be written as   Specific sections are created below for other flying vehicles. A similar expression can be created for a generic moment such that   where is the mean chord of the lifting surface. The dynamic pressure can be used to non-dimensionalize the forces, thus . This means that the equation involving partial derivatives can be written as   If the vector is then expanded to include the components of the vector the partial derivatives expand to   shorthand can be adopted for the forces above such that . Using this shorthand the equation above can be written as.   The coefficients listed above are standard coefficients that all aircraft have. A similar matrix can be formulated for the moments on an aircraft. When system identifying an aircraft all of these coefficients may be determined. However, many of these terms are zero. For example, all coefficients with respect to x y and z are zero. That is, . Other coefficients can be set to zero as well but are not explicitly included in this text.    Aircraft Aerodynamics  For aircraft, some further simplifications are made. Some of the coefficients defined above are combined to be written as functions of the angle of attack( ) and sideslip( ).    Transforming the equations into these formulations gives rise to coefficients such as which is the change in lift as a function of angle of attack and which is the change in Y-Force as a function of sideslip. Using all of the coefficients defined above taking into account the change to lift and drag, the body aerodynamic force is calculated using the equation below.   Where the lift and drag coefficients are:   The body aerodynamic moment is also computed using an aerodynamic expansion.   The aerodynamic coefficients in equations ( ), ( ) and ( ) can be obtained from flight data, aerodynamic modeling and windtunnel tests. Notice that the only coefficients remaining are coefficients from angle of attack, sideslip and angular velocities. Furthermore, the coefficients for angular velocities are also non-dimensionalized by terms such as where is the wingspan of the aircraft and is the mean chord of the aircraft. These terms are introduced to fully non-dimensionalize the coefficients. Notice, as well that four extra terms were also introduced. These will be discussed in more detail in the control section however the four terms are the aileron control surface , the elevator control surface , the rudder control surface and the thrust control value .    Projectile Aerodynamics  To fully define the projectile aerodynamics some more assumptions are made about the projectile.   The projectile is axially symmetric  The aerodynamic forces are not necessarily formulated at the center of mass  The projectile has the potential to be spinning rapidly thus interacting with the surrounding atmosphere   For a projectile the dynamic pressure is written as   The aerodynamic forces on the projectile are modeled using taylor series ballistic expansions with known coefficients similar to the aircraft model only slightly different assumptions are made given the dynamics of the projectile. The subscripts in the equation below stand for steady and unsteady aerodynamics.   In this equation, is the dynamic pressure, is the aerodynamic reference area, is the zero-yaw axial force coefficient, is the yaw-squared axial force coefficient, is the normal force derivative coefficient, is the Magnus force coefficient, and is the total velocity of the projectile.  The aerodynamic moments acting on the projectile are the pitching, pitch damping, Magnus, and roll damping moments. Pitching and Magnus moments are given by taking the cross product of the normal and Magnus forces given in ( ) with the position vector from the center of mass to the center of pressure and location of Magnus force, respectively. The total aerodynamic moments are given in Eqn. ( ).   Here, is the skew-symmetric operator acting on the position vector from the center of mass to the center of pressure expressed in the projectile body frame. Furthermore, is the skew-symmetric operator acting on the position vector from the center of mass to the magnus center of pressure expressed in the projectile body frame. Typically the center of mass is defined from the rear of the projectile such that   Similarly, the center of pressure is defined from the rear of the projectile such that   The vector is then simply the different between both vectors.   The damping coefficient defined in equation ( ) include which is the roll damping coefficient while is the pitch damping coefficient. These coefficients are added which essentially inhibit angular motion of the projectile. In addition, to these coefficients, sometimes magnus coefficients are given as pure moments rather than forces acting at a distance. This can be given in the equation below.   Where replaces the moment produced by and replaces the moment produced by . It is possible to derive an equation between the two different representations as given by the equations below.     Quadcopter Aerodynamics  The aerodynamic model is based on a standard X-frame quadcopter as shown in the Figure below.   3DR Iris+ quadrotor model.    The forces exerted on the quadrotor are the total thrust and aerodynamic drag.   In Eq. ( ), is the total thrust from the rotors and is the total drag on the body. The total thrust exerted on the quadcopter is made possible due to the counter-rotating blades and allows for easy maneuverability by deviating the rotor angular velocities. The thrust can be simply defined as the sum of the exerted rotor forces such that   The thrust model of each rotor can then be equated to angular velocity of each rotor ( ). Where is a positive constant.   The total drag caused by the thrusting of the motors is a combination of the induced drag and rotor flapping [ ]. The induced drag acting on the platform is caused by an imbalance in the thrust produced by advancing and retreating blades. This behavior can be modeled as a linear function of multirotor translational velocity in the quadcopter frame. Additionally, drag due to rotor flapping is caused by rotor flexibility, which is function of advance ratio and dependent on the rotor blades and hub design[ ]. Thus, the total drag vector on the quadcopter is expressed as   where , are the induced drag coefficients and , are positive constants that describe the rotor flapping response as a function of advance ratio in Eq. ( )   The quadcopter moment vector will consider additional aerodynamics created by the rotor torque.   For Eq. ( ), is the gyroscopic moment and is the aerodynamic torque vector from the rotors. Note that is the expanded form of the torque vector. The gyroscopic moments due to the rotors are defined as    where is the moment of inertia about the rotor axis and is the relative rotor speed. In order to rotate the quadcopter to change its Euler angles, the angular velocitiis of each rotor can be altered. Due to the X-Frame design of the quadcopter, this text's convention is used to enumerate each rotor blade where rotor 1 is the forward-left rotor and the numbers continue in a clockwise fashion. The result is that the Euler angles are changed in a positive direction by noting the inequalities below.   Based on Eq. ( ), the torques are modeled accordingly as   In Eq. ( ), and are the lengths from the rotor axis to the positive platform frame axes for roll and pitch, respectively. Positive yaw torque is achieved by reducing the angular velocity in rotors 2 and 4. The torque ( ) of each rotor is also modeled as a fucntion of the angular velocity.   The constant in the above equation denote the blade drag factor. The constants are modeled using blade element momentum theory[ ].    In Eqs. and , is the air density, is the thrust coefficient, and is the torque coefficient.    Spacecraft Aerodynamics  The aerodynamic force is computed using aerodynamic coefficients and dynamic pressure where is the velocity of the satellite and is the magnitude of the velocity vector. Furthermore, is the surface area of the satellite and is the drag coefficient. The torque on the satellite is then given by the cross product between the aerodynamic force and a distance vector representing the distance between the center of mass and the center of pressure .     "
},
{
  "id": "iris-plus",
  "level": "2",
  "url": "s-aerodynamics.html#iris-plus",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": " 3DR Iris+ quadrotor model.   "
},
{
  "id": "sec-julian-day",
  "level": "1",
  "url": "sec-julian-day.html",
  "type": "Section",
  "number": "9.1",
  "title": "Julian Day",
  "body": " Julian Day  In order to obtain the position of the planets, the Julian Day must be obtained. The Julian Day of January 1st, 2019 is 2,458,485. The Julian Day of January 1st, 2000 (which is the day of the last inertial frame update) is 2,451,545. In order to obtain the Julian Day of the current day, you simply need to count the number of calendar days from January 1st of 2000. Again I have listed the Julian day of January 1st, 2019 to help with this calculation. To compute the orbital elements of the Earth you must then compute the number of centuries from January 1st, 2000 which is given by the equation below where J is the Julian day and C is the number of centuries since 1\/1\/2000.   "
},
{
  "id": "sec-orbital-elements",
  "level": "1",
  "url": "sec-orbital-elements.html",
  "type": "Section",
  "number": "9.2",
  "title": "Orbital Elements",
  "body": " Orbital Elements  This number is then used in the equations below to obtain the current semi-major axis, eccentricity, inclination, mean longitude, longitude of perihelion and the longitude of the ascending node respectively. The subscript denotes the orbital element in the year 2000.   The parameters in the equation above for every planet can be found at . Also, The term is an astronomical unit which is equal to 149,597,870,700 meters. For reference though the parameters for Earth are shown below. Just in case you are reading this in the not so distant future, these parameters are only valid until the year 2050 (I may be dead who knows!). Also, the parameters below are for the Earth-Moon barycenter which is the center of mass of the Earth and Moon.   Orbital Elements of Earth-Moon Barycenter    a e i L long.peri. ( ) long.node. ( )    AU, AU\/Cy rad, rad\/Cy deg, deg\/Cy deg, deg\/Cy deg, deg\/Cy deg, deg\/Cy     1.00000261 0.01671123 -0.00001531 100.46457166 102.93768193 0.0    0.00000562 -0.00004392 -0.01294668 35999.37244981 0.32327364 0.0     In the table, the first row is the value in the year 2000 and the second row is the rate per century (Cy). Using these parameters, compute the argument of the perihelion and the mean anomaly . Note that for planets Jupiter, Saturn, Uranus and Neptune, the mean anomaly has a different form. Basically anything past the asteroid belt. With the mean anomaly compute you must modulus this value such that M is between plus or minus 180 degrees. Once that's done you must solve for the eccentric anomaly (E) using the Kepler equation below where is the eccentricity in degrees .   Solving this numerically is pretty simple and only requires a few iterations of the loop below using the C++ programming language. This loop can easily be adapted to any language on modern computers. C++ is shown here in the event this is used for embedded processors in future satellite systems.  E = M + e*180.0\/PI*sin(M*PI\/180.0); dM = 1; dE = 0; while (abs(dM) > 1e-6) { dM = M - (E - e*180.0\/PI*sin(E*PI\/180.0)); dE = dM\/(1.0-e*cos(E*PI\/180.0)); E += dE; }  "
},
{
  "id": "table-orbital-elements",
  "level": "2",
  "url": "sec-orbital-elements.html#table-orbital-elements",
  "type": "Table",
  "number": "9.2.1",
  "title": "Orbital Elements of Earth-Moon Barycenter",
  "body": " Orbital Elements of Earth-Moon Barycenter    a e i L long.peri. ( ) long.node. ( )    AU, AU\/Cy rad, rad\/Cy deg, deg\/Cy deg, deg\/Cy deg, deg\/Cy deg, deg\/Cy     1.00000261 0.01671123 -0.00001531 100.46457166 102.93768193 0.0    0.00000562 -0.00004392 -0.01294668 35999.37244981 0.32327364 0.0    "
},
{
  "id": "sec-sun-centered-inertial-coordinates",
  "level": "1",
  "url": "sec-sun-centered-inertial-coordinates.html",
  "type": "Section",
  "number": "9.3",
  "title": "Sun Centered Inertial Coordinates",
  "body": " Sun Centered Inertial Coordinates  At this point the spatial coordinates can be obtained in the planet's orbital plane where the semi-latus rectum or sometimes simply called the parameter is .   Notice that the value is zero. This is because orbits are all two dimensional. In order to obtain the coordinates of the planet in the J2000 ecliptic plane, the equation below is used which is similar to the standard Euler angle transformation matrix only the 3-1-3 rotation sequence is used rather than 3-2-1.   Running through this formulation for all the planets in the Solar System including Pluto it is possible to plot the position of all planets. The figures below are for January 1st, 2019.   Position of Planets using Orbital Elements           "
},
{
  "id": "fig-planet-positions",
  "level": "2",
  "url": "sec-sun-centered-inertial-coordinates.html#fig-planet-positions",
  "type": "Figure",
  "number": "9.3.1",
  "title": "Position of Planets using Orbital Elements",
  "body": " Position of Planets using Orbital Elements          "
},
{
  "id": "sec-eulers-method",
  "level": "1",
  "url": "sec-eulers-method.html",
  "type": "Section",
  "number": "10.1",
  "title": "Euler’s Method",
  "body": " Euler's Method  The equations of motion presented in this text as well as any differential equation can be integrated using Euler's method which is a crude first order method to approximate the time series solution. Note that this method is prone to a significant amount of instability unless the timestep is very small .   "
},
{
  "id": "sec-runge-kutta-4",
  "level": "1",
  "url": "sec-runge-kutta-4.html",
  "type": "Section",
  "number": "10.2",
  "title": "Runge-Kutta-4",
  "body": " Runge-Kutta-4  The RK4 algorithm is the standard in numerical integration and is given in the equation below. The derivative of the quaternions is the same in RK4 as it is in Euler's method. This method is superior in that it will converge faster as a function of timestep .   "
},
{
  "id": "sec-discrete-dynamics",
  "level": "1",
  "url": "sec-discrete-dynamics.html",
  "type": "Section",
  "number": "10.3",
  "title": "Discrete Dynamics",
  "body": " Discrete Dynamics  It is often useful for modern computers to write the equations of motion in discrete form....  "
},
{
  "id": "sec-linearization",
  "level": "1",
  "url": "sec-linearization.html",
  "type": "Section",
  "number": "11.1",
  "title": "Linearization of Non-Linear Systems",
  "body": " Linearization of Non-Linear Systems  Standard nonlinear dynamics can be placed into standard nonlinear affine form as shown below after much simplification of terms   where is the control input which could be the forces and moments from reaction wheels or thrusters for a spacecraft or lift and drag for an airplane. The vectors and represent the systems dynamics which is dependent on the system itself. Note that if the dynamics cannot be put into affine form, the system is highly nonlinear and the control system designed for that would require more sophisticated analysis like Lyapunov design or sliding mode control. That will be discussed in . For the affine form however, the equation can be linearized to give the equation below.   where and is an equilibrium point. In this formulation and which are partial derivatives of the state matrices. Note that an equilibrium point is a point where the system is at rest and not changing. Mathematically this means that . When linearizing a system it is important to choose an equilibrium point that is relevant to the system. For example, for an aircraft the equilibrium point could be straight and level flight at a constant velocity. For a spacecraft it could be a circular orbit at a constant altitude. The linearized equations of motion are only valid for small perturbations around the equilibrium point. If the system deviates too far from the equilibrium point, the linearized equations may no longer accurately represent the system's dynamics.  "
},
{
  "id": "sec-general-formulation",
  "level": "1",
  "url": "sec-general-formulation.html",
  "type": "Section",
  "number": "11.2",
  "title": "General Formulation of Differential Equations",
  "body": " General Formulation of Differential Equations   The linear systems of equations derived above are in state space form. That is the vector contains all the states of the system. However, it is often easier to understand the dynamics of a system when it is in the form of a single differential equation with all states and derivatives shown in the same equation. Practical examples also help the undergraduate controls engineer as math with practical context is the best way to learn in my humble opinion. The sections below will discuss first and second order systems which are the most common types of systems encountered in engineering applications. Note that higher order systems can be reduced to first and second order systems by using techniques such as root locus or pole placement since higher order systems typically have high frequency dynamics that can be ignored for control purposes. For the most part, first and second order systems are all that is needed to understand the basics of control systems and represent the majority of systems encountered in practice.    First Order Systems  A first order system undergoing free motion will have dynamics that look like this   where is a generalized coordinate, is the inverse of the time constant , and is the forcing function. Examples of these types of systems in include thermistors, servos, and velocity equations for system dynamics.    Second Order Systems  A second order system undergoing free motion will have dynamics that look like this   where is a generalized coordinate, is the inverse of the time constant , is the forcing function, is the natural frequency of the system and is the damping ratio. Examples of these types of systems include mass, spring dampers in linear translation as well as torsional systems and penduluums. Anything that oscillates will exhibit this behavior.   "
},
{
  "id": "sec-practical-systems",
  "level": "1",
  "url": "sec-practical-systems.html",
  "type": "Section",
  "number": "11.3",
  "title": "Equation of Motion Formulation for Practical Systems",
  "body": " Equation of Motion Formulation for Practical Systems   The sections below will discuss practical examples of first and second order systems. Many of these examples are classic examples found in many dynamics and controls textbooks and ones that I typically teach budding control systems aerospace\/mechanical engineers. Each one offers a slightly different set of dynamics and challenges that will help the undergraduate controls engineer understand the concepts of linear systems as well as how to control them and also determine stability.    Position and Velocity of a Car  Consider a car moving in one dimension. The primary forces acting on the car are the driving force from the tires, , and a linear viscous drag force, , where is the viscous drag coefficient, is the position of the car and is the velocity of the car.   Free body diagram of a car    Applying Newton's second law, the sum of forces is equal to mass times acceleration:   where is the mass of the car, is the force generated by the tires, and is the linear drag. In this case to make the system first order we simply leave acceleration as instead of where would be the position of the vehicle. Rearranging, we obtain the standard first-order linear differential equation:   This equation describes the velocity dynamics of the car under a linear drag assumption. In this case and . With these substitutions you arrive at the same equation as . Note that if is replaced with and is replaced with the equation describes the position of car and is second order as shown below.   This is another general second order system where the natural frequency . Using the same substitions as above the general formulation is   where is replaced by . The result is similar to the first order system but still slightly different given the absence of the constant term. It will be shown later that this system is marginally stable and that the difference between the first and second order transfer function is simply a factor of given the difference from velocity to position.    Position of a Mass Spring Damper  A mass-spring-damper system is a classic example of a second-order system. The system consists of a mass attached to a spring with spring constant and a damper with damping coefficient . The mass is free to move along a single axis , and the system is subject to an external force as shown in Figure .   Mass-spring-damper system    Consider the mass-spring-damper system depicted above. The spring exerts a restoring force that is always directed opposite to the displacement of the mass from equilibrium, while the damper exerts a resistive force proportional and opposite to the velocity . The external force acts in the direction of motion. According to Newton's second law, the sum of these forces acting on the mass equals the mass times its acceleration, leading to the equation   Rearranging terms, we obtain the standard form of the equation of motion for the mass-spring-damper system.   This second-order linear differential equation fully describes the dynamic response of the system to any external force . Looking at equation we can see that and . Furthermore, if we let we arrive at the same equation as .    Attitude Dynamics of a Satellite or Quadcopter  For a satellite undergoing free 1-D rotational motion the dynamics are quite interesting from a controls perspective given the somewhat marginal stability of the satellite. The same can be said for a quadcopter undergoing slow rotational motion. In this case, it is assumed that the spacecraft or quadcopter rotates through the angle about its center of mass. The spacecraft\/quadcopter has a moment of inertia and is subject to an external torque as shown in Figure . In this case ,the torque is created by reaction control thrusters or propellors with a force at a distance from the center of mass. Note that in the case of the satellite there are 4 thrusters but only 2 operate at a time. If the top right and bottom left thrusters fire the torque is negative and if the top left and bottom right thrusters fire the torque is positive. In this case we let . If it means it is a positive torque and are non-zero while . If the torque is negative and while are non-zero. For a quadcopter the 4 propellors are offset by a nominal thrust to keep the quadcopter aloft. Furthermore, since the quadcopter is symmetric about the rotational axis it can be assumed that the quadcopter only has 2 propellors and . The torque is created by increasing the thrust on one side and decreasing it on the other side. In this case , where is the thrust required for hovering. Adding the effect of and yields which can just be replaced with and the formulation can continue.   Satellite with reaction control thrusters    The equation of motion for the satellite can be derived from Newton's second law for rotational motion, which states that the sum of torques acting on a body equals the moment of inertia times its angular acceleration as derived in . The full equation is repeated here for clarity.   In this section however the inertia is constant, thus the entire first term goes to zero, and since the motion of the satellite is planar the third term is also zero. Thus, the equation reduces to   where is the angular acceleration of the satellite. The torque generated by the thrusters is given as . The multiplication by 2 is due to 2 thrusters firing at a time or in the case of the quadcopter it is due to the symmetry of the rotation axis as explained above. The final equations of motion for the satellite\/quadcopter are then given as   This is a classic second order system where and . This means that the system is marginally stable and will not return to equilibrium after a disturbance. Stability will be discussed in . Letting results in which is almost the same equation as equation but where the natural frequency and damping ratio are both zero.    Pitch Dynamics of an Aircraft  For an aircraft we assume that the aircraft is symmetric about the longitudinal axis and that the aircraft is only pitching about its center of mass. The pitch dynamics of an aircraft are similar to a spring mass damper since there is a constant restoring moment given by due to the aerodynamic forces acting on the aircraft as well as a damping term also created by aerodynamic forces. Using the aerodynamic equations given in Equation , the pitch dynamics of an aircraft are given as   Note that in this case we assume that the angle of attack which is not necessarily true but for quick motion about the pitch axis this can be assumed to be true. Again the moment of inertia is and the pitch angle is . The aerodynamic force is given by the dynamic pressure where is the density of air, is the velocity of the aircraft (assumed to be constant for pure pitching), is the reference area and is the mean aerodynamic chord. The moment coefficients are which is the restoring moment coefficient, which is the damping moment coefficient and which is the control moment coefficient due to elevator deflection . Rearranging the equation into standard form yields   which is in the standard form of second order systems with a natural frequency and damping ratio given as   Note that and are typically negative which makes both and positive. However, in the case of the F-16 is actually negative. In this case the natural frequency squared becomes negative and the solution quite different. In The control term is the elevator deflection which means performing the final substitution below   results in the same equation as equation provided you subsitute with the generalized q coordinate.    Pitch Dynamics of a Rocket  The pitch dynamic of a rocket are interesting in that the system is also marginally stable much like the satellite\/quadcopter systems explained above. The difference of course is that the system is in the presence of the atmosphere and thus the aerodynamic forces create a damping effect which is proportional to the square of the velocity. This damping term is also nonlinear. However, in order to make the system linear it is assumed that the velocity is constant. For the sake of clarity the full equations of motion will be shown and then simplified to attain a simple linear form. First, the free body diagram of the rocket is shown in the Figure below.   Rocket Pitch Dynamics Free Body Diagram    Here thrust acts at an angle with respect to the centerline of the rocket with a thrust equal to . The length of the rocket is and thus the moment arm of the thrust vector is . The aerodynamic force acts at the center of pressure which is a distance from the center of mass. It is assumed that the rocket is constantly traveling upwards and thus the Drag force is always pointed down at a distance of from the center of mass. The moment of inertia of the rocket is and the pitch angle is . The equations of motion are similar to the quadcopter\/satellite system undergoing 1-D rotational motion with a few subtle differences.   First you'll see that the aerodynamic force which is restoring is nonlinear due to the term. Furthermore, the thrust force acts through the angle leading to a problem where the thrust force could change in addition to the angle . Two control terms would represent a multi-input system which requires the use of optimization to determine the best course of action. Since the focus of this chapter is on Single-Input-Single-Ouput (SISO) systems, the force will be represented as a constant. Thus, the control term for this system will actually be the angle . However, note that the control term is also nonlinear. Both terms can be linearized for small angles such that and . Note that is the equilibrium position in this case. The equation of motion then becomes   Which is linear...almost. The second issue in this equation is that the aerodynamic force is a function of velocity squared. The drag force is given in Equations and . As stated above it is assumed that the velocity is constant and thus is constant as well. The final equation of motion for the rocket pitch dynamics is then given as   If , and , the equations of motion are identical to the general form of second order systems except that is a gain applied to the forcing function.   In addition, it is clear that the damping ratio is zero.    Pitch Dynamics of a Pendulum  The dynamics of a pendulum are interesting for two reasons. First, the system is non-linear in the angle and the system has an infinite number of equilibrium points. Half of the equilibrium points are also unstable. For the sake of this problem though we will restrict the system to be between and which means the system will only have 3 equilibrium points. The first is and the other two are and . Obviously the second two equilibrium points are the same. To formulate the dynamics we start with the figure below   Pendulum Free Body Diagram    The pendulum consists of a mass attached to a rigid, massless rod of length . The pendulum swings about a pivot point under the influence of gravity, which exerts a downward force on the mass. An external torque acts at the pivot point itself. The angle represents the angular displacement of the pendulum from the vertical equilibrium position. The equation of motion for the pendulum can be derived just as before with the sum of torques acting on a body equaling the moment of inertia times its angular acceleration. The moment of inertia for a point mass at a distance from the pivot is given by . The torque generated by the gravitational force is , where the negative sign indicates that gravity acts to restore the pendulum to its equilibrium position. Thus, the equation of motion is given as   Rearranging and substituting the moment of inertia yields   This equation is close to the second order equations where the damping ratio is zero but it is nonlinear due to the and terms. In this case the system can be linearized about the equilibrium point but can also be linearized about the equilibrium point if the pendulum is inverted. In order to linearize the equations of motion you need to use equation . Note that in this case the matrices and are expanded out instead of using matrix notation.   where and . Calculating the partial derivative and plugging into the equation above yields   Rearranging and dropping the terms yields   This will now yield two separate and quite different equations depending on the equilibrium point chosen. First, if the equilibrium point is the equation becomes   which is in the standard form of second order systems where and . The control term is which results in the same equation as . If the equation becomes   which is again in the standard form of second order systems except that the constant term is negative which means the system is actually unstable. More on this system will be discussed in . Furthermore, the solution is also quite different and will be explored in the sections that follow.   "
},
{
  "id": "f-car_fbd",
  "level": "2",
  "url": "sec-practical-systems.html#f-car_fbd",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": " Free body diagram of a car   "
},
{
  "id": "f-msd",
  "level": "2",
  "url": "sec-practical-systems.html#f-msd",
  "type": "Figure",
  "number": "11.3.2",
  "title": "",
  "body": " Mass-spring-damper system   "
},
{
  "id": "f-satellite",
  "level": "2",
  "url": "sec-practical-systems.html#f-satellite",
  "type": "Figure",
  "number": "11.3.3",
  "title": "",
  "body": " Satellite with reaction control thrusters   "
},
{
  "id": "f-rocket",
  "level": "2",
  "url": "sec-practical-systems.html#f-rocket",
  "type": "Figure",
  "number": "11.3.4",
  "title": "",
  "body": " Rocket Pitch Dynamics Free Body Diagram   "
},
{
  "id": "f-pendulum",
  "level": "2",
  "url": "sec-practical-systems.html#f-pendulum",
  "type": "Figure",
  "number": "11.3.5",
  "title": "",
  "body": " Pendulum Free Body Diagram   "
},
{
  "id": "sec-solutions",
  "level": "1",
  "url": "sec-solutions.html",
  "type": "Section",
  "number": "11.4",
  "title": "Characteristic and Particular Solutions to Differential Equations",
  "body": " Characteristic and Particular Solutions to Differential Equations   The differential equations presented in the previous section can be solved using a variety of methods. The most common methods are the characteristic and particular solution method and the Laplace transform method. The sections below will discuss both methods starting with the characteristic and particular solution method.    General First Order System  First the first order system defined above will be solved first. For a first order linear differential equation of the form presented in equation , the general solution is the sum of the homogeneous (characteristic) solution and a particular solution. The particular solution corresponds to the steady-state response when the forcing function is constant. In this case assume is a step function which is just a constant . The particular solution where is a constant and thus Plugging this into equation gives   Thus, the particular solution for a constant input is simply . If the forcing function is not constant then the particular solution will be a function of time and solving for the particular solution will be more difficult. Examples of this include sinusoidal forcing functions or exponentially decaying forcing functions. The solutions to these types of forcing functions can be found in many differential equations textbooks and will not be discussed here for the time being. The homogeneous solution is found by setting the forcing function to zero and solving the resulting equation assuming that . Thus, the homogeneous equation is   In the equation above the result yields 3 equations that could be equal to zero. The first is which is a trivial solution and thus not considered. The second is which is never true for any real or complex value of s. The third is which is the charactertic equation for the first order system. The solution to this equation yields the characteristic root . Thus, the homogeneous solution is   where A is a constant determined by the initial conditions. The general solution is the sum of the homogeneous and particular solutions   The constant A can be determined by the initial condition which yields   Thus, the final solution to the first order system is   or more simply   In the case of the car example the solution would be   noting that , and is the initial velocity of the car. Typically for these types of systems the initial velocity is zero so the equation simplifies to   which shows that the car will asymptotically approach a steady state velocity of . This will be plotted later in for open loop analysis.    General Second Order Systems  The solution to second order systems is quite complex given the nature of solving a second order differential equation. The general solution is again the sum of the homogeneous and particular solutions and assume the initial conditions are zero. The major difficulty with second order systems is that the solution to the homogenous characteristic eqaution can be real, repeated or imaginary roots. The roots effect the overall solution and will be discussed later. To start the particular solution is very simple and is again found by assuming a constant forcing function such that where is a constant and thus and . Plugging this into equation gives the eqaution below:   Thus, the particular solution for a constant input is simply . If the forcing function is not constant then the particular solution will be a function of time and solving for the particular solution will be more difficult. Examples of this include sinusoidal forcing functions or exponentially decaying forcing functions. The solutions to these types of forcing functions can be found in many differential equations textbooks and will not be discussed here for the time being. The homogeneous solution is found by setting the forcing function to zero and solving the resulting equation assuming that . Thus the homogeneous equation is   In the equation above the result yields 3 equations that could be equal to zero. The first is which is a trivial solution and thus not considered. The second is which is never true for any real or complex value of s. The third is which is the charactertic equation for the second order system. The solution to this equation yields the characteristic roots which as stated above can have real, repeated or imaginary roots. The characteristic roots are found using the quadratic formula and are given as   Note that if is negative, as is the case with the unstable of the F-16 or the inverted pendulum, the characteristic equation becomes which results in roots of   which is almost the same but notice the plus sign in front of the term. In this case the roots are always real and distinct. It is possible to have complex roots if the damping ratio is negative but this is not a common case and will not be discussed here. The nature of the roots depends on the value of the damping ratio as well as the sign of . The three cases for are underdamped ( ), critically damped ( ), and overdamped ( ). Each case will be discussed below. Note that for the case where the roots are always real and distinct which has a similar solution to the overdamped case.     Underdamped ( ) : In this case, the roots are complex conjugates ( ) where , leading to oscillatory behavior. Note that this case also applies to the edge case where the damping ratio is zero. The homogeneous solution is given by:   where is the damped natural frequency, and and are constants determined by initial conditions.     Critically Damped ( ) : In this case, the roots are real and repeated ( ). The homogeneous solution is given by:      Overdamped ( or ) : In this case, the roots are real and distinct ( ) or ( ). The homogeneous solution is given by:     The general solution is the sum of the homogeneous and particular solutions   The constants and can be determined by the initial conditions and . The final solution will depend on the damping ratio and the initial conditions. For the case where the initial conditions are zero the final solutions for each case are shown below.     Underdamped ( ) Note the solution is still valid if :      Critically Damped ( ) :      Overdamped ( or ) :     In the case of the mass-spring-damper example, recall that , , and .    Special Case of Natural Frequency Equal to Zero  As was shown in the special case of the car where no restoring force existed, the natural frequency was equal to zero. In this case the general equation of motion was . The solution to this equation is different given the characteristic equation is which has two roots of and . The homogeneous solution in this case is given as   For the particular solution again assume a constant forcing function such that where is a constant and thus and . Plugging this into the equation of motion gives   and then . Thus, the particular solution is and the general solution is   The constants and can be determined by the initial conditions and . For the case where the initial conditions are zero the final solution is given as   In the case of the car example, recall that and . Plugging those values into the equation yields   This result is intuitive because it states that if a constant force to the car is applied, the car will initially accelerate but then reach a constant velocity due to the drag force. This is different than the case of the quadcopter\/satellite example where the angle will continue to accelerate. Note that . Applying a derivative to the equation above yields the same result as equation the equation for velocity   This is a good check for the budding controls engineer to ensure that the math is correct.    Special Case of Natural Frequency and Damping Ratio Equal to Zero  As was shown in the special case of the satellite\/quadcopter where no restoring moment or damping moment existed, the natural frequency and damping ratio were both equal to zero. In this case the general equation of motion was . The solution to this equation is different given the characteristic equation is simply which has a repeated root of . The homogeneous solution is then given as   since . The particular solution is again where is a constant. Plugging this into the equation of motion gives   Thus, the particular solution is and the general solution is   The constants and can be determined by the initial conditions and . For the case where the initial conditions are zero the final solution is given as   In the case of the satellite\/quadcopter example, recall that . This result is intuitive because it states that if a constant force to the thrusters\/propellors is applied, the angle of the satellite\/quadcopter will increase quadratically over time. That is, the system will continue to accelerate until it runs out of fuel or the thrusters are turned off. In the case of the quadcopter, if the propellors return to symmetric thrust the quadcopter will stop accelerating and maintain a constant angular velocity. In practice of course the quadcopter will have some damping due to air resistance and the satellite will have some damping due to magnetic torques and other effects. However, these effects are typically small and can be ignored for control purposes.   "
},
{
  "id": "subsec-laplace-first-order",
  "level": "1",
  "url": "subsec-laplace-first-order.html",
  "type": "Section",
  "number": "12.1",
  "title": "General First Order Systems",
  "body": " General First Order Systems  Taking the Laplace transform of equation and assuming zero initial conditions gives   where is the Laplace transform of and is the Laplace transform of . Rearranging gives the equation below   The function is called the transfer function of the system and is a very important function in control systems. The transfer function relates the output of the system to the input of the system in the Laplace domain. The transfer function can be used to analyze the stability and performance of the system. The transfer function can also be used to design controllers for the system which will be discussed later. Let's now assume that the forcing function is a step function such that where is the unit step function. The Laplace transform of a step function is . Plugging this into the equation above gives   The solution to the equation above can be found by taking the inverse Laplace transform. However, the equation above is not in the standard table of Laplace transforms. Thus partial fraction decomposition is needed to get into a form that can be used for inverse Laplace. The equation can be rewritten using partial fractions as   where and are constants to be determined. Multiplying both sides by the denominator on the left side gives   Setting gives . Setting gives . Thus, the equation can be rewritten as   Taking the inverse Laplace transform gives   substituting back in the values for and gives   which is the same solution as derived using the characteristic and particular solution method assuming zero initial conditions as given by equation .  "
},
{
  "id": "subsec-laplace-second-order",
  "level": "1",
  "url": "subsec-laplace-second-order.html",
  "type": "Section",
  "number": "12.2",
  "title": "General Second Order Systems",
  "body": " General Second Order Systems  Taking the Laplace transform of equation and assuming zero initial conditions gives   Rearranging just as before gives the equation below   where again is the transfer function of the system. Let's again assume that the forcing function is a step function such that . Plugging the Laplace transform of just as before gives   The solution to the equation above again can be found by taking the inverse Laplace transform. However, again the equation above is not in the standard table of Laplace transforms. Thus partial fraction decomposition is needed to get into a form that can be used for inverse Laplace. The equation can be rewritten using partial fractions as   where , and are constants to be determined. Multiplying both sides by the denominator on the left side gives   Setting gives . Setting and gives two equations that can be solved simultaneously to find and . The final results are and . Thus, the equation can be rewritten as   The first term of the equation is simply the Laplace transform of a step function. The second term can be solved using the table of Laplace transforms. The final solution depends on the value of the damping ratio just as before. The final solutions for each case assuming zero initial conditions are shown below. It is left to the reader to verify that these solutions match those derived using the characteristic and particular solution method. For the case when the inverse laplace is simply a sine or cosine while the the general underdamped solution is solved by completing the square in the denominator and using the Laplace transform of the underdamped sine and cosine functions. The critically damped and overdamped solutions are solved using the Laplace transforms of repeated roots and real distinct roots respectively.     Underdamped ( ) :      Critically Damped ( ) :      Overdamped ( or ) :     Notice again that the solutions are the same as those derived using the characteristic and particular solution method assuming zero initial conditions. It is possible that the undergraduate engineer still does not see the usefulness of the Laplace transform method. The true power of the Laplace transform method is in the transfer function. The transfer function can be used to analyze the stability and performance of the system as well as design controllers for the system which will be discussed in the sections below.  "
},
{
  "id": "subsec-laplace-wn-zero",
  "level": "1",
  "url": "subsec-laplace-wn-zero.html",
  "type": "Section",
  "number": "12.3",
  "title": "Special Case of Natural Frequency Equal to Zero",
  "body": " Special Case of Natural Frequency Equal to Zero  As was shown in the special case of the car where no restoring force existed, the natural frequency was equal to zero. In this case the general equation of motion was . Taking the laplace transform of this equation and assuming zero initial conditions gives   Rearranging gives the equation below   where again is the transfer function of the system. Notice that this is identical to the first order transfer function multiplied by an additional term. This is because the second order system with zero natural frequency is simply the integral of the first order system. That is . In the Laplace domain this means that or if we let the lapace transform would result in . This is where the Laplace transform method really shines. The transfer function can be manipulated easily in the Laplace domain to find relationships between different variables. Differential equations in the time domain can be difficult to manipulate but in the Laplace domain they are simply algebraic equations. Let's again assume that the forcing function is a step function such that . Plugging the Laplace transform of just as before gives   The solution to the equation above can be found by taking the inverse Laplace transform. However, again the equation above is not in the standard table of Laplace transforms. Thus partial fraction decomposition is needed to get into a form that can be used for inverse Laplace. The equation can be rewritten using partial fractions as   where , and are constants to be determined. Multiplying both sides by the denominator on the left side gives   Setting gives and . Setting gives and thus . Setting gives   Plugging in these values for A, B, and C gives   Taking the inverse Laplace transform gives   which is the same result shown previously. Taking the derivative of the equation above gives the same result as the velocity equation shown previously. The budding controls engineer may think that the method of partial fractions and inverse Laplace transform is tedious and not worth the effort. However, the true power of the Laplace transform method is in the transfer function. The transfer function can be used to analyze the stability and performance of the system as well as design controllers for the system which will be discussed in detail in .  "
},
{
  "id": "subsec-laplace-wn-zeta-zero",
  "level": "1",
  "url": "subsec-laplace-wn-zeta-zero.html",
  "type": "Section",
  "number": "12.4",
  "title": "Special Case of Natural Frequency and Damping Ratio Equal to Zero",
  "body": " Special Case of Natural Frequency and Damping Ratio Equal to Zero  As was shown in the special case of the satellite\/quadcopter where no restoring moment or damping moment existed, the natural frequency and damping ratio were both equal to zero. In this case the general equation of motion was . Taking the Laplace transform of this equation and assuming zero initial conditions gives   Rearranging gives the equation below   where again is the transfer function of the system. Let's again assume that the forcing function is a step function such that . Plugging the Laplace transform of just as before gives   The solution to the equation above can be found by taking the inverse Laplace transform. The equation above is in the standard table of Laplace transforms and the inverse Laplace transform is given as   which is the same solution as derived using the characteristic and particular solution method assuming zero initial conditions. In the case of the satellite example, recall that .  "
},
{
  "id": "sec-position-velocity-car",
  "level": "1",
  "url": "sec-position-velocity-car.html",
  "type": "Section",
  "number": "13.1",
  "title": "Position and Velocity Response of a Car",
  "body": " Position and Velocity Response of a Car  First, let's plot the time response of the first order system given by equation \\ref{e:first_order_solution} as well as the second order solution given by equation \\ref{e:position_car_solution}. The parameters for the system are chosen to be , , and . The initial velocity and position are assumed to be zero. In order to show the time response however, 3 different curves will be placed on the graph. The first will be the analytic solution to the first and second order system, the second is the Laplace transform solution using the control systems toolbox in Python and the last is the numerical integration of the equations of motion. The python code used to generate this is shown in the Figure below and also available on GitHub .   Python code to generate the time response of a car       Note the code is commented to help the reader understand what is happening. Note the benefit of using the control systems toolbox in Python. The time response can be generated by first creating the transfer function and then applying a step to the transfer function. This will come in handy later when it is necessary to apply a control system to the transfer function before inversing back to the time domain. The numerical integration is also useful when the equations of motion are known and the control system designer wants to work in the time doman rather than the laplace domain. It's also very helpful when the system is non-linear since transfer functions only work for linear systems. All three methods have their pros and cons. The numerical integration is done using the scipy.integrate.odeint function which is a simple way to numerically integrate ordinary differential equations. The results of the time response are shown in Figure .   Time response of the position (right) and velocity (left) of a car       The time response shows that the velocity of the car asymptotically approaches a steady state value of . The time constant of the system is . The time constant is the time it takes for the system to reach 63.2% of its steady state value. The settling time is the time the system takes to get within 2% of its final value. In this case that is . The time response can be used to analyze the stability and performance of the system. In this case, the system is stable and the performance is acceptable given the parameters chosen. However, examining the position of the car shows that the position will continue to increase linearly over time. This is because the car is moving at a constant velocity. The position of the car will not reach a steady state value but rather continue to increase linearly over time. This is an example of a marginally stable system. The velocity of the car is stable while the position of the car is marginally stable.  "
},
{
  "id": "fig-car-code",
  "level": "2",
  "url": "sec-position-velocity-car.html#fig-car-code",
  "type": "Figure",
  "number": "13.1.1",
  "title": "",
  "body": " Python code to generate the time response of a car      "
},
{
  "id": "fig-car-response",
  "level": "2",
  "url": "sec-position-velocity-car.html#fig-car-response",
  "type": "Figure",
  "number": "13.1.2",
  "title": "",
  "body": " Time response of the position (right) and velocity (left) of a car      "
},
{
  "id": "sec-position-mass-spring-damper",
  "level": "1",
  "url": "sec-position-mass-spring-damper.html",
  "type": "Section",
  "number": "13.2",
  "title": "Position of a Mass Spring Damper",
  "body": " Position of a Mass Spring Damper  Simulating the mass spring damper is very similar to the car example. The parameters for the system are chosen to be , , , and . The initial position and velocity are assumed to be zero. The python code used to generate this is shown in the Figure below and also available on GitHub .   Python code to generate the time response of a mass spring damper       Note the code is commented to help the reader understand what is happening. Again, the simulation is run by integrating the equations of motion, applying a step response to the transfer function and also plotting the analytic solution. The results of the time response are shown in Figure .   Time response of the position of a mass spring damper    The time response shows that the position of the mass spring damper reaches a steady state value of . The time constant of the system is . The natural frequency of the system is . The damping ratio of the system is . The settling time is the time the system takes to get within 2% of its final value. In this case that is . Notice that where again . The time response can be used to analyze the stability and performance of the system. In this case, the system is stable and the performance is acceptable given the parameters chosen. Here are some useful equations for natural frequency, settling time and other second order parameters.   "
},
{
  "id": "fig-mass-spring-damper-code",
  "level": "2",
  "url": "sec-position-mass-spring-damper.html#fig-mass-spring-damper-code",
  "type": "Figure",
  "number": "13.2.1",
  "title": "",
  "body": " Python code to generate the time response of a mass spring damper      "
},
{
  "id": "fig-mass-spring-damper-response",
  "level": "2",
  "url": "sec-position-mass-spring-damper.html#fig-mass-spring-damper-response",
  "type": "Figure",
  "number": "13.2.2",
  "title": "",
  "body": " Time response of the position of a mass spring damper   "
},
{
  "id": "sec-attitude-satellite-quadcopter",
  "level": "1",
  "url": "sec-attitude-satellite-quadcopter.html",
  "type": "Section",
  "number": "13.3",
  "title": "Attitude of a Satellite or Quadcopter",
  "body": " Attitude of a Satellite or Quadcopter  Recall for the satellite\/quadcopter example the equation of motion was given as and the transfer function was given as . The solution to this system due to a step function was shown in the general solution to second order systems with the special case that the natural frequency and damping ratio was zero. The solution then given as which increases quadratically over time. The python code used to generate this is also available on Github . The code is not shown here as it is very similar to the previous two examples. Again the code is commented to help the reader understand what is happening. The simulation is run by integrating the equations of motion, applying a step response to the transfer function and also plotting the analytic solution. The results of the time response are shown in Figure . For this specific case , and .   Time response of the attitude of a satellite\/quadcopter    The time response shows that the attitude of the satellite\/quadcopter increases quadratically over time. This is because there is no restoring moment or damping moment acting on the system. The system is marginally stable as the attitude will continue to increase over time and this will be discussed in more detail in section \\ref{s:stability}.  "
},
{
  "id": "fig-satellite-response",
  "level": "2",
  "url": "sec-attitude-satellite-quadcopter.html#fig-satellite-response",
  "type": "Figure",
  "number": "13.3.1",
  "title": "",
  "body": " Time response of the attitude of a satellite\/quadcopter   "
},
{
  "id": "sec-pitch-response-aircraft",
  "level": "1",
  "url": "sec-pitch-response-aircraft.html",
  "type": "Section",
  "number": "13.4",
  "title": "Pitch Response of an Aircraft",
  "body": " Pitch Response of an Aircraft  The solution for the pitch response of an aircraft is very similar response to the mass spring damper system given the second order nature of the system. The difference lies in the natural frequency and damping ratio. For the mass spring damper example the system oscillated quite a bit with a damping ratio of which is quite underdamped. As such, many oscillations were present. For the case of the attitude dynamics of an aircraft the \"short period\" mode of the aircraft is quite quick and highly damped as will be shown below. Note that a standard aircraft has 5 general mode shapes due to the six degree of freedom nature of the aircraft. However, for this simple 2-D analysis of pure pitch motion about the center of mass, only the \"short period\" mode is seen. This mode is due to the lift generated by the tail and the stability derivative . In order to simulate this second order system an example aircraft must be used. The aircraft utilized for this analysis is an E-flite Apprentice S15e airplane as shown in Figure . This aircraft is a three wheeled high wing trainer made of a patented Z-Foam that allows the airplane to be durable yet lightweight. The wing has a constant Clark-Y airfoil with a chord length of 0.75 ft. The wingspan of the aircraft is 4.92 ft. Using a fish scale, the total weight of each aircraft was found to be 2.72 lbf ( ). Inertia estimates were crude rectangular prism estimates assuming even distribution of mass. The inertias were found to be . The airplane is equipped with an 840 kV brushless outrunner motor, 30-Amp pro switch-mode BEC brushless ESCs, three digital micro servos to control the aileron and the elevator, and a larger standard servo that controls the rudder and the front wheel of the landing gear. The aircraft is equipped with a 3000 mAh 3S LiPo battery and a trim velocity of .   Apprentice S 15e Aircraft    This aircraft has been used by the (Facility for Aerospace Systems and Technology) FAST Lab for many flight tests. While the mass and geometric parameters have been explained above, the aerodynamic coefficients have been reported in many sources , , . The aerodynamic coefficients from a previous state estimation report are given in the Table below .   Estimated Aerodynamic Coefficients after System Identification Procedure       0.34 0.017 -0.076 5.94 -24.45 5.19 1.01 -2.19 0.41 -1.15 0.069 -0.24       -0.028 0.18 -0.016 -0.50 0.098 0.088 -0.788 -0.069 0.28 0.0047 0.06 -0.17     Using these coefficients, the mass and geometry properties, similar code can be used to plot the time response of the system. As discussed previously, the equations of motion of the pitch dynamics of an aircraft are given as   To find the transfer function, a few substitutions are made to simplify the equation. Let   The equation of motion can then be rewritten as   Taking the laplace transform of both sides and assuming zero initial conditions gives   Using the equations of motion as well as the general solution for a second order system the time response itself can be put here. Note that for a typical aircraft the system is stable given the negative . Above notice that . However, as is the case with the F-16 fighter jet, some aircraft are designed to be slightly unstable in pitch in order to increase maneuverability. In this case is positive rather than negative which makes the natural frequency imaginary and the system unstable. This will be discussed in more detail in section \\ref{s:stability}. However, for now the system will be simulated for both a positive and negative to highlight the potential instability in attitude dynamics of an aircraft. The time response of both simulations is shown below. The code used to generate these plots is on Github . Also note that .   Attitude Response of an Aircraft ( left) ; ( right)       Note that since is negative, the response of the system should be negative. In this case though a negative control deflection is inputted so that the plots are positive. First, examining the plot on the left, the system is indeed second order and oscillates but the oscillations are damped out significantly faster than in the mass spring damper case. This is because which is so much closer to 1. Remember that a system with is a critically damped system. Therefore, this short period aircraft dynamic simulation is a lot closer to being critically damped than it is underdamped. The plot on the right is generated by setting which is positive causing the aircraft to be statically unstable. This results in the system diverging off to infinity rather than settling to a steady state value. These unstable systems require a sophisticated control system to ensure the system remains stable and doesn't cause the aircraft to spin wildly out of control.  "
},
{
  "id": "fig-apprentice",
  "level": "2",
  "url": "sec-pitch-response-aircraft.html#fig-apprentice",
  "type": "Figure",
  "number": "13.4.1",
  "title": "",
  "body": " Apprentice S 15e Aircraft   "
},
{
  "id": "table-aerofinal",
  "level": "2",
  "url": "sec-pitch-response-aircraft.html#table-aerofinal",
  "type": "Table",
  "number": "13.4.2",
  "title": "Estimated Aerodynamic Coefficients after System Identification Procedure",
  "body": " Estimated Aerodynamic Coefficients after System Identification Procedure       0.34 0.017 -0.076 5.94 -24.45 5.19 1.01 -2.19 0.41 -1.15 0.069 -0.24       -0.028 0.18 -0.016 -0.50 0.098 0.088 -0.788 -0.069 0.28 0.0047 0.06 -0.17    "
},
{
  "id": "fig-aircraft-response",
  "level": "2",
  "url": "sec-pitch-response-aircraft.html#fig-aircraft-response",
  "type": "Figure",
  "number": "13.4.3",
  "title": "",
  "body": " Attitude Response of an Aircraft ( left) ; ( right)      "
},
{
  "id": "sec-pitch-response-rocket",
  "level": "1",
  "url": "sec-pitch-response-rocket.html",
  "type": "Section",
  "number": "13.5",
  "title": "Pitch Response of a Rocket",
  "body": " Pitch Response of a Rocket  The pitch dynamics of a rocket can be formulated in the same second-order framework used for aircraft and the mass-spring-damper example. The difference in this system lies with the assumption that there is no damping. Recall that the equations of motion of the rocket are as follows:   where and . In reality the lack of damping is not necessarily true but the formulation is done just to highlight what would happen if no damping is present in the system. For the system above the transfer function is   The analytic solution is then the same for the second order case assuming that the damping ratio . Using similar code to the spring mass damper system the response to a step input can be shown below assuming the rocket is a small hobbyist grade rocket.   Time response of the attitude of a rocket with TVC    In this simulation above , , , , , and . The python code used to generate this is on GitHub . The time response shows an interesting result in that the rocket will continue to oscillate forever. Naturally this would be impossible in real life again given the drag created by aerodynamics but for academics sake it is interesting to look at a system that has no damping and oscillates forever. A system like this would be considered marginally stable but of course that will be explained in more detail in section .  "
},
{
  "id": "fig-rocket-response",
  "level": "2",
  "url": "sec-pitch-response-rocket.html#fig-rocket-response",
  "type": "Figure",
  "number": "13.5.1",
  "title": "",
  "body": " Time response of the attitude of a rocket with TVC   "
},
{
  "id": "sec-angle-inverted-pendulum",
  "level": "1",
  "url": "sec-angle-inverted-pendulum.html",
  "type": "Section",
  "number": "13.6",
  "title": "Angle of an Inverted Pendulum",
  "body": " Angle of an Inverted Pendulum  The time response for the inverted pendulum will be similar to the time response of the aircraft because it is second order, it oscillates and it can be either stable or unstable depending on the equilibrium point chosen for the linearization. Recall the equations of motion for the pendulum are   Where the is positive when the equilibrium point of is chosen and negative when the equilibrium point of is chosen. The transfer function of this system is then   Simulating this system is exactly the same as has been done in the previous sections and again can be found on GitHub . Assuming , and gravity set to the time response can be simulated and is shown below.   Pendulum Response ( left) ; ( right)       Here it is easy to see that in the case of the pendulum pointing down, the pendulum just oscillates forever. However, in the case where the pendulum is straight up, the pendulum diverges off to infinity. In reality, for the nonlinear system the pendulum would just move to a stable equilibrium point but that type of nonlinear analysis will be discussed in .  "
},
{
  "id": "fig-pendulum-response",
  "level": "2",
  "url": "sec-angle-inverted-pendulum.html#fig-pendulum-response",
  "type": "Figure",
  "number": "13.6.1",
  "title": "",
  "body": " Pendulum Response ( left) ; ( right)      "
},
{
  "id": "sec-position-and-velocity-of-a-car",
  "level": "1",
  "url": "sec-position-and-velocity-of-a-car.html",
  "type": "Section",
  "number": "14.1",
  "title": "Position and Velocity of a Car",
  "body": " Position and Velocity of a Car  As derived earlier the transfer function for the position of the car is given as recall also that the time domain solution to this system due to a step function was given as Plotted in the time domain the system accelerated and then attained a constant velocity. The poles of the system are located at and . The pole at has a negative real part and thus is stable. This is due to the term which translates to the term in the time domain. The pole at has a real part equal to zero and thus is marginally stable as given by the term in the laplace domain and the term in the time domain. The marginal stability is apparent because the position of the car will continue to increase linearly over time due to the constant velocity. However, the velocity of the car will reach a steady state value and not diverge to infinity. Thus, the system is considered stable for velocity. Remember the transfer function for velocity is found by simply multiplying the position transfer function by or taking the derivative in the time domain. The transfer function for velocity is given as while the time domain solution to this system due to a step function was given as The pole of the velocity system is located at again from the term in the laplace domain and the term in the time domain. The pole has a negative real part and thus is stable. This is because the velocity of the car will reach a steady state value and not diverge to infinity. Examining both systems in the laplace domain is much easier than examining the time domain solutions because you can simply look at the poles of the transfer function. It is also beneficial to plot the poles of the system on a real-imaginary plot as shown in Figure .   Poles of Car System (Position (left) and Velocity (right))       Notice that the poles of the position system are located at and while the pole of the velocity system is located at . The position system has one marginally stable pole and one stable pole while the velocity system has one stable pole. Thus, the position system is marginally stable while the velocity system is stable. Remember if at least one pole is marginally stable and none are unstable the system is considered marginally stable. If all poles are stable the system is considered stable.  "
},
{
  "id": "f_car_poles",
  "level": "2",
  "url": "sec-position-and-velocity-of-a-car.html#f_car_poles",
  "type": "Figure",
  "number": "14.1.1",
  "title": "",
  "body": " Poles of Car System (Position (left) and Velocity (right))      "
},
{
  "id": "sec-position-of-a-mass-spring-damper",
  "level": "1",
  "url": "sec-position-of-a-mass-spring-damper.html",
  "type": "Section",
  "number": "14.2",
  "title": "Position of a Mass Spring Damper",
  "body": " Position of a Mass Spring Damper  As derived earlier the transfer function for the position of the mass spring damper is given as recall also that the time domain solution to this system due to a step function was given as for the underdamped case. Plotted in the time domain the system oscillated and then attained a steady state value. The poles of the system are located at The real part of the poles is which is negative for all positive values of and . Thus, the system is stable for all positive values of and . Examining the system in the laplace domain is much easier than examining the time domain solutions because you can simply look at the poles of the transfer function. It is also beneficial to plot the poles of the system on a real-imaginary plot as shown in Figure .   Poles of Mass Spring Damper System    Notice that the poles of the mass spring damper system are located in the left half of the complex plane. The real part of the poles is negative and thus the system is stable. The imaginary part of the poles determines the frequency of oscillation while the real part of the poles determines the rate of decay. The further left the poles are located in the complex plane, the faster the system will decay to its steady state value. Thus again the transfer function shows it's usefuleness in determining the stability of a system as well as whether it oscillates or not. In this case the system is stable (left half plane) and oscillatory (imaginary part non-zero).  "
},
{
  "id": "f_mass_spring_damper_poles",
  "level": "2",
  "url": "sec-position-of-a-mass-spring-damper.html#f_mass_spring_damper_poles",
  "type": "Figure",
  "number": "14.2.1",
  "title": "",
  "body": " Poles of Mass Spring Damper System   "
},
{
  "id": "sec-attitude-dynamics-of-a-satellite-or-quadcopter",
  "level": "1",
  "url": "sec-attitude-dynamics-of-a-satellite-or-quadcopter.html",
  "type": "Section",
  "number": "14.3",
  "title": "Attitude Dynamics of a Satellite or Quadcopter",
  "body": " Attitude Dynamics of a Satellite or Quadcopter  As derived earlier, the transfer function of this system is given as . The poles of the system are located at and . Both poles have real parts equal to zero and thus the system is marginally stable because they are on the y-axis of the real-imaginary plane. Physically, this marginal stability is because the angle of the satellite\/quadcopter will continue to increase quadratically over time due to the constant angular acceleration from a constant force from the propellor\/thrusters. The marginal stability can be seen in the time domain with the system increasing as . However, examining the system in the laplace domain is much easier than examining the time domain solutions because you can simply look at the poles of the transfer function. Again, it is beneficial to plot the poles of the system on a real-imaginary plot as shown in Figure .   Poles of Satellite\/Quadcopter System    Notice that the poles of the satellite\/quadcopter system are located at and . Both poles have real parts equal to zero and thus the system is marginally stable and increases quadratically over time. A single pole at zero would increase linearly but two poles at the origin increases quadratically.  "
},
{
  "id": "f_satellite_poles",
  "level": "2",
  "url": "sec-attitude-dynamics-of-a-satellite-or-quadcopter.html#f_satellite_poles",
  "type": "Figure",
  "number": "14.3.1",
  "title": "",
  "body": " Poles of Satellite\/Quadcopter System   "
},
{
  "id": "sec-pitch-dynamics-of-an-aircraft",
  "level": "1",
  "url": "sec-pitch-dynamics-of-an-aircraft.html",
  "type": "Section",
  "number": "14.4",
  "title": "Pitch Dynamics of an Aircraft",
  "body": " Pitch Dynamics of an Aircraft  The poles of the aircraft are similar to the spring mass damper given the second order nature of the system. Using the characteristic equation of the poles of the system are located at . The stability of the system depends on the values of and which depend on the aerodynamic stability derivatives and . In this case if is negative, will be positive and the descriminant under the square root will be negative and thus imaginary. If instead is positive, will be negative and then the descriminant will be a positive number. This will cause the poles to become real and distinct. If any pole is positive in the right half plane (RHP) the system is unstable. Using the same code from the poles of the transfer function can be plotted on a pole zero map.   Attitude Response of an Aircraft ( left) ; ( right)       Again as can be seen in the left figure the poles are in the left hand plane (LHP) and thus the time response is stable. However, for the situation where is positive, the poles are real and distinct with one positive and one negative. Since one pole is positive the entire system is unstable.  "
},
{
  "id": "f_aircraft_poles",
  "level": "2",
  "url": "sec-pitch-dynamics-of-an-aircraft.html#f_aircraft_poles",
  "type": "Figure",
  "number": "14.4.1",
  "title": "",
  "body": " Attitude Response of an Aircraft ( left) ; ( right)      "
},
{
  "id": "sec-pitch-dynamics-of-a-rocket",
  "level": "1",
  "url": "sec-pitch-dynamics-of-a-rocket.html",
  "type": "Section",
  "number": "14.5",
  "title": "Pitch Dynamics of a Rocket",
  "body": " Pitch Dynamics of a Rocket  As derived earlier, the transfer function of this system is given as where and are defined in . The poles of the system are located at . Using the same time response code and the pole zero map generation, the poles can be plotted on the real\/imaginary axes as shown in Figure .   Poles of Rocket System    Notice that the poles are purely imaginary which means they lie on the boundary of the left and right half plane. Because they lie on the axis the system is marginally stable. It doesn't settle out but also don't increase off to infinity. Furthermore, both poles are are imaginary which means they system oscillates. Once again the transfer function shows the open loop system dynamics by just examining the roots of the denominator.  "
},
{
  "id": "f_rocket_poles",
  "level": "2",
  "url": "sec-pitch-dynamics-of-a-rocket.html#f_rocket_poles",
  "type": "Figure",
  "number": "14.5.1",
  "title": "",
  "body": " Poles of Rocket System   "
},
{
  "id": "sec-angle-of-an-inverted-pendulum",
  "level": "1",
  "url": "sec-angle-of-an-inverted-pendulum.html",
  "type": "Section",
  "number": "14.6",
  "title": "Angle of an Inverted Pendulum",
  "body": " Angle of an Inverted Pendulum  Recall that the transfer function of the inverted penduluum is given by Looking at the transfer function like has been done in the past, specifically the poles, the characteristic equation is which leads to stable poles and unstable poles . A simple glance would indicate that the poles are identical but notice that when is positive the poles are purely imaginary indicating a marginally stable system and then when is negative the poles are real, distinct and one is positive. This implies that that the system is unstable since even one positive pole makes the system untable. This is why the time response of the system with the equilibrium point diverges to infinity. The poles plotted on a real and imaginary axis can be see in the Figures below:   Pendulum Poles ( left) ; ( right)       These two pole maps show the importance of analyzing the open stability of a system especially non-linear systems. In the case where the pendulum is facing down a control system is not necessary provided small oscillations are tolerable. However, for the case where the pendulum is straight up, a control system is required to prevent the system falling over. For systems like a Segway, a control system would be necessary to keep the system upright and the poles from transfer are direct indicators of the stability of these open loop systems.  "
},
{
  "id": "f_pendulum_poles",
  "level": "2",
  "url": "sec-angle-of-an-inverted-pendulum.html#f_pendulum_poles",
  "type": "Figure",
  "number": "14.6.1",
  "title": "",
  "body": " Pendulum Poles ( left) ; ( right)      "
},
{
  "id": "sec-sensor-measurement",
  "level": "1",
  "url": "sec-sensor-measurement.html",
  "type": "Section",
  "number": "15.1",
  "title": "Sensor Measurement",
  "body": " Sensor Measurement  During the standard estimation procedure, it is assumed that measurements are made that relate to the state or the state is directly measured. If the state is directly measured like star trackers no special formulation need to be made. However, other sensors such as Sun sensors, magnetometers and horizon sensors measure a vector in 3-D space. In general a measurement can be expressed by the nonlinear equation shown below where is the state vector.   The vector is noise associated with the sensor  . If the system is linearized about some equilibrium point the measurement equation can be written as   where . It's easy to see here that in the case of the star tracker the matrix is just the identity matrix. The noise vector is assumed to be gaussian white noise while the covariance is given by the equation below using the expectation operator .   If a measurement is made by a Sun sensor or similar where a vector in 3-D space can be compared to a known inertial reference vector the measurement update can be given as   where is a measurement in the body reference frame at time . The angular velocity measurement in particular can be denoted as . Measurements are typically polluted with bias and white noise. For example, the angular velocity measurement can be given as   where is a bias that has dynamics given by . The vectors and are standard Gaussian white noise vectors. Typically white noise can be filtered out using lowpass filters, complimentary filters or even Kalman Filters while bias can just be substracted. Thus, the estimate for the angular velocity can be written as   where is the estimate of the bias.  "
},
{
  "id": "sec-linear-least-squares",
  "level": "1",
  "url": "sec-linear-least-squares.html",
  "type": "Section",
  "number": "15.2",
  "title": "Linear Least Squares",
  "body": " Linear Least Squares  In order to understand the nature of a Kalman filter, the linear least squares solution is shown below. Assume for the moment that independent measurements are made such that .   In this case and . The vector is a vector of error values between your measurements and the actual truth signals . Absent of all measurement and model noise there would be a unique solution to this problem to solve for the vector . The matrices and are known and are the measurements and the output equation relating the measurements to the state values in respectively. Because of measurement and model noise, a unique solution is not possible. That is, the problem is overconstrained since typically the number of measurements is larger than the number of unknowns. Take the linear example as shown in the figure below.   Linear Regression Example    In this case the ordinate axis is the output and the abscissa is the independent variable that characterizes the matrix . The black dots then are the measurements while the trend line is the estimate . In this case the residuals is the distance between the trend line in red and the black dots (the measurements). For this linear example, the unknowns would be the slope and intercept. It is clear here that there exists no linear solution that goes through all black data points. Thus, the equation below can be constructed.   This implies that the trendline would go through all data points if were zero. Thus the solution to this problem was originally found by Gauss and involved minimizing the residuals between and (the estimated Y values). To do this, a cost function is generated such that   Substituting in the equation and minimizing the cost function results in the solution below.   Note that the equation above only works if the number of measurements is greater than or equal to the number of unknowns . If not, the solution will always be rank deficient and no solution will be found. This is called an under constrained problem. In this there are an infinite number of solutions that satisfy even in the presence of modeling errors. In order to get around this issue Lagrange's method of optimization is used . For problems like this the residuals between the estimate and the measured signals can be easily made to be zero. Thus minimizing the residuals is trivial since the solution will still be an infinite number of solutions. Therefore a constraint can be placed where . In order to find a unique solution then the requirement is placed to minimize the estimate . In this case, the cost function to be minimized is given by Lagrange's extension to optimization as shown below   The cost function above utilizes the method of Lagrange multipliers in order to satisfy the constraint that the solution must pass through all measurements again only if the number of measurements is less than the number of unknowns . In the equation above the vector must be solved and so must the Lagrange multipliers . The solution to the problem above requires and . Carrying out the partial derivatives and solving for the estimate yields the following equations.   Note, it is standard practice in state estimation to have at least as many measurements as unknowns. In this case and Gauss' solution is sufficient.  "
},
{
  "id": "fig-linear-regression",
  "level": "2",
  "url": "sec-linear-least-squares.html#fig-linear-regression",
  "type": "Figure",
  "number": "15.2.1",
  "title": "Linear Regression Example",
  "body": " Linear Regression Example   "
},
{
  "id": "sec-weighted-least-squares",
  "level": "1",
  "url": "sec-weighted-least-squares.html",
  "type": "Section",
  "number": "15.3",
  "title": "Weighted Least Squares",
  "body": " Weighted Least Squares  The weighted least squares solution is found by setting the cost function equal to where is a positive definite and symmetric weighting matrix. The solution then is shown below.   In the standard Kalman Filter approach, the weighting matrix is given by the inverse covariance of the error . Placing this into a matrix yield where . The weighted least squares solution then reduces to   "
},
{
  "id": "sec-a-priori-knowledge-of-the-state-vector",
  "level": "1",
  "url": "sec-a-priori-knowledge-of-the-state-vector.html",
  "type": "Section",
  "number": "15.4",
  "title": "A Priori Knowledge of the State Vector",
  "body": " A Priori Knowledge of the State Vector  If a priori knowledge is obtained via other means or in the case of the standard Kalman Filter from integration of the state, it is possible to obtain an updated estimate of the state based on the previous state estimate and the new sensor measurements. First, the a priori estimate is written as   where is model noise associated with the error in the state estimate. The covariance of this noise is also denoted as a matrix and defined below.   In this case it is desired for the updated measurement to be some linear combination of the a priori equation and the measurements such that   The matrices and have an added constraint which can be shown by assuming the a priori measurement is perfect and the measurements . In this case, we must have the updated estimate equal the truth signal: . Rearranging the equation above yields   which means that . Again using the method of lagrange multipliers the cost function to be minimized is given as   where and again is the expectation operator. Remembering that is the covariance of the model noise and is the covariance of the measurement noise, the solution to the minimization problem is given by the equation below.   Note that this solution assumes that . Measurement and model noise are uncorrelated.  "
},
{
  "id": "sec-complimentary-filter",
  "level": "1",
  "url": "sec-complimentary-filter.html",
  "type": "Section",
  "number": "15.5",
  "title": "Complimentary Filter",
  "body": " Complimentary Filter  Looking at the equation for the A priori knowledge it is possible to formulate the complimentary filter. First, the measurements are assumed to be identical to the state vector such that . From here a few extremes are shown below. First, assume that the measurement error is very low such that the while the model noise is very large approaching infinity. In this case, . Substituting this into the weighted apriori equation yields   which essentially states that the estimate completely believes the sensor measurement. If instead we assume that the model noise is perfect such that and the sensor noise is approaching infinity, then . This yields the following equation.   Thus it can be seen that there is a sliding bar between believing the apriori estimate or the sensor measurement. As such it is possible to develop a much simpler filter. First a constraint is placed on and such that   This causes the update law to reduce to the following   If only one measurement is investigated the equation collapses to the following.   The constraint also collapses to   If and the update law simplifies to   Here it is clear that if the new estimate will be equal to the old estimate meaning that the sensor noise is approaching infinite. If it means that the new estimate is equal to the sensor measurement meaning the model noise is approaching infinity. This is a simple crude first order filter that can be used when only a simple understanding of covariance is known.  "
},
{
  "id": "sec-sequential-linear-estimator",
  "level": "1",
  "url": "sec-sequential-linear-estimator.html",
  "type": "Section",
  "number": "15.6",
  "title": "Sequential Linear Estimator",
  "body": " Sequential Linear Estimator  In the above two scenarios, it is assumed that all measurements from 1 to are known at the same time instant and thus the least squares estimate can be done all at once . For discrete time sensors on board a spacecraft this is not possible. For example, if we take the weighted least squares solution assuming we have a 0th batch of measurements, the estimate of would be   If we then waited seconds for a new set of measurements we would have to obtain a new estimate of which could be done using the equation below   This solution however would only take into account the new measurements. Thus, if larger matrices were constructed like the solution for becomes the same as it was in . This process would be tedious if these matrices were computed over and over again. This is because the matrices would continue to grow larger and larger over time and eventually overflow the memory management system on the computer. Thus, a method for updating the state vector every time a new measurement is obtained must be derived. To do this the two equations are substituted into . Then a covariance matrix is used such that which never grows in size. Using that simplification and making use of a estimation gain matrix , the estimation algorithm is as follows:    The first measurement is obtained    Compute the matrix    Obtain the estimate for (Notice that if you use the equation above this is the same solution as the weighted least squares estimate)    Every time a new measurement, , is obtained use the recursive least squares update law shown in the equation below.     In the special case where the weighting matrix is equal to a constant and the state vector is directly measured such that is also identity, the sequential linear estimator gives the following simplified steps.    The first measurement is obtained    Compute    Obtain the estimate for (this is a fault of being identity)    Every time a new measurement, , is obtained use the recursive least squares update law shown in the equation below.     "
},
{
  "id": "sec-continuous-time-complimentary-filter",
  "level": "1",
  "url": "sec-continuous-time-complimentary-filter.html",
  "type": "Section",
  "number": "15.7",
  "title": "The Continuous Time Complimentary Filter",
  "body": " The Continuous Time Complimentary Filter  In the above section a discrete sequential least squares update law was formulated. In that derivation it is assumed that the state estimate is held constant in between state measurements. It is possible however to integrate a model of the state dynamics and use that estimate in between state measurements. The is the start of a Kalman Filter. To formulate the Continuous Time Complimentary Filter the dynamics of the system are written such that   where the initial conditions are and is a modeling noise term where just as was defined in the a priori estimation section. The model dynamics are set up such that   where again is the state measurement and is noise associated with the sensor where . The term is added as a psuedo control which can be whatever we want. The idea is for to be the control input to drive while the psuedo control is for the observer dynamics to drive . The model dynamics are going to deviate in between sensor measurements so if the observer dynamics are designed properly the estimate can converge to the measurement. Of course, this means your estimate is only as good as your measurement noise but it is a start. To design the psuedo control law, measurement feedback is used in the same form as standard unity feedback control laws such that where is the difference between the estimate and the measurement. The closed loop dynamics can then be written as   Looking at this equation it's hard to see the effect of the observer. Thus the error dynamics must be investigated where . For the simple case it is assumed that and . The closed loop error dynamics can then be written as   in this case the solution to this equation is   where the term is a function of the noise term . In this case, if is chosen to be large, the error dynamics will be very fast but the noise term will be very large. If is chosen to be very small the error dynamics will be slow but the error term will not be a prevalent. The issue with this filter of course comes with how to tune the gain matrix which is what the Kalman filter seeks to address.  "
},
{
  "id": "sec-continuous-discrete-kalman-filter",
  "level": "1",
  "url": "sec-continuous-discrete-kalman-filter.html",
  "type": "Section",
  "number": "15.8",
  "title": "The Continuous Discrete Kalman Filter",
  "body": " The Continuous Discrete Kalman Filter  In the case of the continuous discrete Kalman Filter, the model dynamics are integrated just as in the complimentary filter. The only difference is instead of using a continuous observer the state estimate is updated every time a new measurement is obtained much like the sequential least squares technique. First, let's write the model dynamics as before without the observer and the measurement equations are written such that the measurement is taken at timestep and thereafter every .   The update equation is written using the continuous observer dynamics used for the complimentary filter only in this case the update is discrete.   In this case is the estimated state after the update while is the estimate before the update. The equation for the covariance update and the Kalman Gain matrix are identical in that the derivation is formulated just as it was before. The equations are shown below again only and is used to denote the matrices before and after update.   In the sequential linear estimator however, the covariance matrix was set using a weighted least squares approach. In this case the covariance matrix is set such that . Taking a derivative of this equation and substituting in the closed loop error dynamics yields the covariance propagation equation shown below.   The final Continuous Discrete Kalman Filter then goes like this.    Integrate the model dynamics in and the covariance dynamics in    When a measurement is received, the Kalman Gain matrix is computed using .    is also used to update the covariance matrix    Finally, is used to update the state vector estimate and then the process repeats.    An example figure is shown below for a first order system. In this figure the blue stars represent discrete sensor measurements with some noise. Everytime the sensor is updated the model performs and update and instantaneously changes to a new value. The model then integrates (incorrectly due to model mismatch) until a new sensor measurement is obtained. In this case the model is so inaccurate it makes more sense to update the sensor more frequently or perform some sort of adaptive control algorithm to estimate the plant dynamics.   First Order Kalman Filter Example    "
},
{
  "id": "fig-kalman",
  "level": "2",
  "url": "sec-continuous-discrete-kalman-filter.html#fig-kalman",
  "type": "Figure",
  "number": "15.8.1",
  "title": "First Order Kalman Filter Example",
  "body": " First Order Kalman Filter Example   "
},
{
  "id": "sec-kalman-filter-for-spacecraft-dynamics",
  "level": "1",
  "url": "sec-kalman-filter-for-spacecraft-dynamics.html",
  "type": "Section",
  "number": "15.9",
  "title": "Kalman Filter for Spacecraft Dynamics",
  "body": " Kalman Filter for Spacecraft Dynamics  Attitude estimation involves a combination of attitude determination and state estimation. Assuming at time the attitude estimation algorithm is performed and an estimate of the quaternion is obtained as . If discrete regular angular velocity ( ) measurements are made every seconds, the quaternion can be estimated by simply integrating the attitude equations of motion. Even if perfect sensor measurements are made, it is possible to integrate these equations of motion over time and the quaternion will be much different than the estimated quaternion . Thus, the attitude estimation algorithm can run again to obtain a new absolute quaternion measurement. The equations of motion are integrated and when a new sensor measurement is obtained the estimated state is updated based on the estimated covariance combined with and estimate of model errors and sensor errors. Finally, it is possible to create an Extended State Kalman Filter (EKF) which can estimate sensor inaccuracies simply by finding the least squares solution between the sensor measurements and state estimates. The sections that follow details the Kalman Filter for Spacecraft Dynamics as well as the extended state version which estimate bias values in the rate gyro.  First, the 4-dimensionality of the quaternion renders the above Kalman filter formulation to be impossible mostly because the quaternion derivative is a 4 by 1 matrix while the angular velocity vector is a 3 by 1. Furthermore, the quaternion derivative is not linear and cannot be expressed as the linear matrices in the previous section. As such the Kalman Filter must be updated somewhat. The derivative of the state is cumbersome and follows the reference in . First the angular velocity measurement is substituted into the derivative of quaternions where the and identity is used to separate out the white noise parameter.   At this point an error quaternion is created using the difference between and . Recall that the error quaternion is given by the equation below.   The derivative of this difference quaternion is beyond the scope of this report but can be found in .   where and . Recall that . The second term in the equation above can be expanded using the equations in . Note that simplifies to and .   In order to proceed further, small angle approximations are made such that . The latter 3 variables in the quaternion are further approximated as . In order to fit in with the standard Kalman filter, the state vector and thus the state dynamics can then be written as   In order to extract the attitude quaternion from the approximated state the following equations are used.   "
},
{
  "id": "sec-extended-state-kalman-filter",
  "level": "1",
  "url": "sec-extended-state-kalman-filter.html",
  "type": "Section",
  "number": "15.10",
  "title": "Extended State Kalman Filter",
  "body": " Extended State Kalman Filter  As shown in the previous section, a Kalman filter can be used to estimate the state. The standard Kalman filter however can be extended to include the bias of the angular velocity measurement. Thus the state vector is augmented to be . Since the derivative of the bias is the white noise vector, the difference state vector after much simplification is shown below.   In this formulation . The derivative is then . It is assumed that the derivative of the estimate is zero and thus is only updated when sensor measurements are made. The states equation above can be reduced to the state space form shown below.   "
},
{
  "id": "sec-euler-angle-estimation-via-imu",
  "level": "1",
  "url": "sec-euler-angle-estimation-via-imu.html",
  "type": "Section",
  "number": "15.11",
  "title": "Euler Angle Estimation via IMU",
  "body": " Euler Angle Estimation via IMU  Using an IMU it is possible to obtain Euler Angles assuming a Flat Earth Approximation. Recall that Euler angles are a 3D transformation from the Inertial frame to the Body Frame. The angle and can directly be measured via the accelerometer by creating a relationship between the gravity vector in the inertial and body frames. The heading angle can be measured by creating a relationship between the magnetic field in the body frame and the inertial frame using a magnetometer. The rate gyro can be used to integrate the angular velocity to obtain Euler angles as well but is prone to drift. The accelerometer though is prone to errors when the vehicle experiences large acceleration loads. Thus, typically the Euler angles from the rate gyro are fused with the estimates from the magnetometer and the accelerometer. Still, some errors can still exist and the Euler angles can be fused with estimates from GPS but that will be explored in a separate section. First, let's examine the direct estimation of roll and pitch using the accelerometer.   Direct Measurement of Roll and Pitch  Understand that the gravity vector in the inertial frame can be written as . However, since the first rotation in the Euler angle sequence is about the z-axis, the gravity vector in the A frame and Inertial (I) frames are identical. That is, . Normalizing the gravity vector yields . The measurement from the accelerometer must also be normalized such that . Since the aircraft is always experiencing gravity, and the accelerometer is measuring the acceleration vector a relationship can be obtained between the gravity vector in the A frame and the acceleration vector in the body frame. Note that an assumption is being made here. It is assumed that the only acceleration being experienced is gravity. Therefore, if any external accelerations are experienced by the vehicle via thrust or aerodynamics, this equation is not valid. Still, for small UAV applications these equations can be accurate if fused properly with the rate gyro measurements.   The equation above takes the normalized gravity vector in the A frame and rotates it to the body frame through the no roll frame. Since the rotation is from the A frame to the body frame, only two rotations are required. Notice also that the first row can be used to obtain the pitch angle.   The roll angle can then be obtained by taking the second two rows and dividing them together to get a tangent function.   Note that this equation is only valid if . This means the vehicle cannot fly straight up. For quadcopters and airplanes this is pretty typical for standard and level flight. For rockets however, either the IMU must be placed in an orientation that doesn't result in this singularity at launch or quaternions must be used. For spacecraft an entirely different algorithm is needed and is explained in a different section.  Note that the pitch angle equation is written using the inverse sine function. Often times it is beneficial to compute the pitch angle using the inverse tangent function so that the atan2 function may be utilized on a microcontroller which determines the quadrant of the angle more robustly. To do this the gravity vector must be written in the no roll frame.   Then the acceleration vector is rotated to no roll frame as well from the body frame   Setting the two equations above equal to each other and diving the first row by the second row results in a tangent equation for pitch. This result is shown in the equation below.   Notice that these equations for pitch can be constructed by drawing a right triangle with the gravity vector as the hypotenuse. The sine function is the opposite side of the triangle divided by the hypotenuse which is 1 since the gravity vector was normalized while the inverse tangent function is the opposite side over the adjacent side.    Direct Measurement of Yaw  In order to obtain the yaw angle of the vehicle through a direct measurement, the magnetometer is used. First it is assumed that the magnetic field strength is a constant through the flight of the vehicle and that it is oriented along the x-axis in the inertial frame of the Flat Earth Approximation. Remember that the x-axis is North using the Flat Earth Approximation. The magnetic field vector of the Earth is then normalized to unity.   Again, in order to get a tangent function for the yaw angle estimation, the magnetic field of the Earth is written in the A frame.   The magnetic field measurment of the magnetometer is then written in the A frame as well. However, the magnetometer measures the magnetic field in the body frame. Thus 2 rotations are requires to get from the body frame to the A frame. Again the magnetometer measurement is normalized.   The two equations for magnetic field in the A frame can then be equated. In this case, the second row is divided by the first row to obtain a tangent relationship for yaw. The result for yaw is shown below.    "
},
{
  "id": "sec-low-earth-orbit-attitude-estimation",
  "level": "1",
  "url": "sec-low-earth-orbit-attitude-estimation.html",
  "type": "Section",
  "number": "15.12",
  "title": "Low Earth Orbit Attitude Estimation",
  "body": " Low Earth Orbit Attitude Estimation  In LEO the main algorithm begins with obtaining the magnetic field in the body frame using magnetometers . Using the IGRF model the locally measured magnetic field can be compared with the known magnetic field for any given location within its orbit. Using the true data and the measured data, the spacecraft can compute its actual position to the measured position and make the correct adjustments. A Sun measurement is then taken using a Sun sensor . Once those two independent body frame measurements are taken the inertial reference vectors must be obtained from a database. Startrackers have this database built in; however, for the magnetic field and the Sun vector these must be obtained from a separate database as discussed in Section. The idea is that if the position of the Earth is known then the position of the Sun with respect to the Earth is also known. The magnetic field vector can be obtained from the IGRF model as discussed in Section. The magnetic field vector in the inertial frame is given as . Note that the IGRF model requires the latitude and longitude to be known. Thus, in LEO a GPS is required to feed into the database. The inertial Sun vector only requires the Julian time which can be obtained from GPS as well. The julian time is based on the julian day as explained in Section.  The initial attitude determination algorithm itself requires two independent vectors. As stated previously, startrackers provided a large enough aperture and enough stars to produce the full quaternion by obtaining multiple unique vectors to unique stars. Multiple solar sensors or multiple magnetometers unfortunately do not obtain non-unique vectors and the algorithm fails. In LEO this is typically done with solar sensors and magnetometers but it can be done with star trackers. In deep space it is typically done with startrackers but it could be possible to obtain a Moon vector that would require a Moon sensor.  The derivation below is done for the LEO case with a Sun and magnetic field measurement. The derivation is identical for the deep space case with a Moon sensor simply by substituting the magnetic field measurment with a Moon measurement. Every vector is first normalized to obtain . A triad is then created from body frame vectors using the equations below.   The matrix is then created using the triad as an orthonormal basis . Similar equations are used for the inertial measurements.   The matrix is then created just as the matrix such that . The transformation from inertial to body frame is then created using the formula below.   This matrix above is similar to the matrix in equation and thus the Euler angles can be extracted from the matrix itself using the formulation defined in Section. Euler can then be converted to quaternions if needed. Note that it is relatively easy to extract Euler angles from the matrix, it is not so simple to extract quaternions. This is due to the fact that for every orientation there exists two quaternions that represent this space. Thus, it is more ideal to obtain Euler angles from the transformation matrix and then convert them to quaternions.  "
},
{
  "id": "sec-spacecraft-position-estimation-using-a-ground-station-network-gsn",
  "level": "1",
  "url": "sec-spacecraft-position-estimation-using-a-ground-station-network-gsn.html",
  "type": "Section",
  "number": "15.13",
  "title": "Spacecraft Position Estimation using a Ground Station Network (GSN)",
  "body": " Spacecraft Position Estimation using a Ground Station Network (GSN)  There are several types of ground stations depending on the spacecraft’s distance from Earth. Ground services may be either Direct-to-Earth (DTE) or space relay. DTE ground stations are located on the Earth’s surface. They provide direct point-to-point access with antennas at ground stations. DTE services are great for missions needing frequent, short-duration contacts with high data transfer.  Space relay services involve an intermediate satellite that communicates with a ground station on the Earth’s surface. Relay communication satellites for low-Earth orbit spacecraft can be in Geosynchronous Equatorial Orbit (GEO), roughly 36,000 km from the surface of Earth, or in low-Earth orbit. Relays are important for providing communication and tracking when direct-to-ground communications are not feasible due to physical asset visibility constraints. Space-based relay assets give missions full-time coverage and continuous access to communication and tracking services.  Finally, deep space communication is also possible. The Deep Space Network (DSN) is developed to conduct telecommunication and tracking operations with space missions in GEO. This includes missions at lunar distances, the Sun-Earth LaGrange points, and in highly elliptical Earth orbits, and even missions to other planets . The DSN network consists of three ground stations placed around 120 degrees apart on Earth which provides 360 degrees coverage .   Deep Space Network Satellite Coverage    "
},
{
  "id": "fig-dsn-coverage",
  "level": "2",
  "url": "sec-spacecraft-position-estimation-using-a-ground-station-network-gsn.html#fig-dsn-coverage",
  "type": "Figure",
  "number": "15.13.1",
  "title": "Deep Space Network Satellite Coverage [63]",
  "body": " Deep Space Network Satellite Coverage   "
},
{
  "id": "sec-heading-angle-and-speed-estimation-using-gps",
  "level": "1",
  "url": "sec-heading-angle-and-speed-estimation-using-gps.html",
  "type": "Section",
  "number": "15.14",
  "title": "Heading Angle and Speed Estimation using GPS",
  "body": " Heading Angle and Speed Estimation using GPS  On Earth there is no need for a DSN because the vehicle is within the GPS constellation. Assuming the vehicle has the necessary GPS sensors a full NMEA (National Marine Electronics Association) can be obtained. However, in this example it is assumed that only the latitude, longitude and altitude coordinates are obtained in a discrete fashion. In order to get heading and speed it is assumed that consecutive measurements are obtained at and timestamps. Let's assume that the vehicle is traveling in a specific direction or heading and obtains a GPS coordinate at time . A few seconds later or whenever the update period may be the vehicle moves and the GPS returns a new GPS coordinate at time . First, the coordinates are converted to a cartesian coordinate system. This is explained in the External Model section. This results in at time and at time . First, the speed estimate is given by using a simple first order differentiation as given by   where . Note that it is not recomended to compute the velocity in the z-axis as the altitude estimate of GPS is often not very good. Finally, the estimate for heading can follow from the speed estimate and is given as   Note that it is recommended to filter these estimates as GPS on its own is only accurate to around 3 meters.  "
},
{
  "id": "sec-controllability",
  "level": "1",
  "url": "sec-controllability.html",
  "type": "Section",
  "number": "16.1",
  "title": "Controllability",
  "body": " Controllability  Before beginning to talk about control there is a necessary discussion about controllability. Controllability is formally stated as a system where any initial state and final state , there exists a piecewise continuous input such that . What this means is that a system is controllable if it can be driven from any initial state to any final state in a finite time. This is an important concept because if a system is not controllable then no matter how good the control system is it will never be able to drive the system to the desired state.  For a fixed wing aircraft the system has 12 states with 8 dynamic modes and 4 zero or rigid body modes. For a fixed wing aircraft the system has 12 states with 8 dynamic modes and 4 zero or rigid body modes. A conventional aircraft has 4 controls to control these 12 modes. The easiest way to test the controllability of a system is to compute the controllability matrix. However, the controllability matrix must be computed using a linearized model such that . In order to do this the aircraft must be in equilibrium. For this example the aircraft is set with an initial velocity of at an altitude of . The altitude command is set to and the heading command is set to zero. Given the zero heading angle command and the symmetry of the configurations investigated the rudder and aileron commands are set to zero. Thus, only the thrust and elevator controls are activated for the trimming procedure. Each configuration is simulated for 200 seconds or until the derivatives of all states except are within a required tolerance. Using this equilibrium point a linear model can be computed by using forward finite differencing assuming that the aircraft model is put in the form .   This linear model is the classic linear model where . Using this linear model, the controllability matrix can be computed as   where N is the number of states in the system. With the controllability matrix formulated, the rank of the matrix is computed. If the the system is said to be controllable.  "
},
{
  "id": "sec-bang-bang-control-satellite",
  "level": "1",
  "url": "sec-bang-bang-control-satellite.html",
  "type": "Section",
  "number": "16.2",
  "title": "Bang Bang Control of a Satellite",
  "body": " Bang Bang Control of a Satellite  "
},
{
  "id": "sec-proportional-control-satellite-quadcopter",
  "level": "1",
  "url": "sec-proportional-control-satellite-quadcopter.html",
  "type": "Section",
  "number": "16.3",
  "title": "Proportional Control of a Satellite or Quadcopter",
  "body": " Proportional Control of a Satellite or Quadcopter  "
},
{
  "id": "sec-proportional-derivative-control-satellite-quadcopter",
  "level": "1",
  "url": "sec-proportional-derivative-control-satellite-quadcopter.html",
  "type": "Section",
  "number": "16.4",
  "title": "Proportional Derivative Control of a Satellite or Quadcopter",
  "body": " Proportional Derivative Control of a Satellite or Quadcopter  "
},
{
  "id": "sec-proportional-control-car",
  "level": "1",
  "url": "sec-proportional-control-car.html",
  "type": "Section",
  "number": "16.5",
  "title": "Proportional Control of a Car",
  "body": " Proportional Control of a Car  "
},
{
  "id": "sec-proportional-integral-control-car",
  "level": "1",
  "url": "sec-proportional-integral-control-car.html",
  "type": "Section",
  "number": "16.6",
  "title": "Proportional Integral Control of a Car",
  "body": " Proportional Integral Control of a Car  "
},
{
  "id": "sec-proportional-derivative-integral-control-spring-mass-damper",
  "level": "1",
  "url": "sec-proportional-derivative-integral-control-spring-mass-damper.html",
  "type": "Section",
  "number": "16.7",
  "title": "Proportional Derivative Integral Control of a Spring Mass Damper System",
  "body": " Proportional Derivative Integral Control of a Spring Mass Damper System  "
},
{
  "id": "sec-proportional-derivative-control-inverted-pendulum",
  "level": "1",
  "url": "sec-proportional-derivative-control-inverted-pendulum.html",
  "type": "Section",
  "number": "16.8",
  "title": "Proportional Derivative Control of an Inverted Pendulum",
  "body": " Proportional Derivative Control of an Inverted Pendulum  "
},
{
  "id": "s_phase_portraits",
  "level": "1",
  "url": "s_phase_portraits.html",
  "type": "Section",
  "number": "17.1",
  "title": "Phase Portraits",
  "body": " Phase Portraits  "
},
{
  "id": "s_lyapunov_control",
  "level": "1",
  "url": "s_lyapunov_control.html",
  "type": "Section",
  "number": "17.2",
  "title": "Lyapunov Control",
  "body": " Lyapunov Control  "
},
{
  "id": "s_sliding_mode_control",
  "level": "1",
  "url": "s_sliding_mode_control.html",
  "type": "Section",
  "number": "17.3",
  "title": "Sliding Mode Control",
  "body": " Sliding Mode Control  "
},
{
  "id": "s_adaptive_control",
  "level": "1",
  "url": "s_adaptive_control.html",
  "type": "Section",
  "number": "17.4",
  "title": "Adaptive Control",
  "body": " Adaptive Control  "
},
{
  "id": "conclusions",
  "level": "1",
  "url": "conclusions.html",
  "type": "Chapter",
  "number": "18",
  "title": "Conclusions",
  "body": " Conclusions   Turns out I never wrote a conclusion section for this book. I guess I will get back to this later.   "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Chapter",
  "number": "19",
  "title": "Acknowledgements",
  "body": " Acknowledgements   Carlos Montalvo would like to thank numerous students for their contribution to this document. They have been instrumental in making this textbook a reality and this textbook would not be where it is today without them. Those students are: Weston Barron, Colin Mcgee, Darcey D’Amato, Ruthie Hill, Drew Russ, William Sherman, Maxwell Cobar, Wei Min Patrick, Caroline Franklin, Andrew Givens, Aaron Godfrey, Nghia Huynh, Lisa Schibelius, and Brandon Troub.   "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  GitHub. GitHub Copilot. https:\/\/copilot.github.com\/, 2021. Accessed on December 5, 2025.  Google DeepMind. Gemini: Googles multimodal ai model. https:\/\/gemini.google.com\/, 2023. Accessed on December 5, 2025.  Wikipedia. V-model. https:\/\/en.wikipedia.org\/wiki\/V-Model. Accessed December 21st, 2021.  Draw.io. JGraph Ltd, 2026, www.drawio.com\/. Accessed 29 Mar. 2026  Blender. Blender Foundation, 2026, www.blender.org\/. Accessed 29 Mar. 2026  Fritzing. Fritzing, 2026, fritzing.org\/. Accessed 29 Mar. 2026  SolidWorks. Dassault Systèmes, 2026, www.solidworks.com\/. Accessed 29 Mar. 2026  Autodesk. Autodesk, 2026, www.autodesk.com\/. Accessed 29 Mar. 2026  Cirkit Designer. Cirkit, 2026, https:\/\/app.cirkitdesigner.com\/. Accessed 29 Mar. 2026  Inkscape. Inkscape, 2026, www.inkscape.org\/. Accessed 29 Mar. 2026  CircuitPython. https:\/\/circuitpython.org\/, 2021. Accessed: 12-09-2021.  Carlos Montalvo, Lisa Schibelius, and Marine Leabeater. Project Based Engineering Instrumentation with CircuitPython. Github, 2023. https:\/\/cmontalvo251.github.io\/project-based-instrumentation\/.  Adafruit. Adafruit learn, 2021. Adafruit https:\/\/learn.adafruit.com\/.  Carlos Montalvo. Facility for aerial systems and technology github repository. cmontalvo251, 2022. https:\/\/github.com\/cmontalvo251  Adafruit. Adafruit, 2023. Adafruit https:\/\/adafruit.com\/.  Arduino. Arduino, 2023. https:\/\/www.arduino.cc\/.  Montalvo, Carlos. YouTube, 2026, www.youtube.com\/@CarlosMontalvo251.  Python Software Foundation. Python, 2026. https:\/\/www.python.org\/.  Aasumets, Aivar. Thonny: Python IDE for Beginners. 2026, thonny.org\/.  Spyder: The Scientific Python Development Environment. Spyder Project Contributors, 2026, www.spyder-ide.org\/.  Google Colaboratory. Google, 2026. https:\/\/colab.research.google.com\/.  Mu Editor. Mu, 2026. https:\/\/codewith.mu\/en\/.  GNU Octave. GNU, 2026. https:\/\/www.gnu.org\/software\/octave\/.  Google Sheets. Google, 2026. https:\/\/www.google.com\/sheets\/about\/.  B. Etkins. Dynamics of Atmospheric Flight. Dover, Mineola, New York, 2000. pages 9-13, 134-151, 196-318.  Warren F. Phillips. Mechanics of Flight. John Wiley and Sons, Hoboken, New Jersey, 2010.  R.C. Nelson. Flight Stability and Automatic Control. McGraw-Hill, 2nd edition, 1998.  Jerry E. White, Roger R. Bate, Donald D. Mueller. Fundamentals of Astrodynamics. Dover, 1971.  Arthur KL Lin and Regina Lee. Attitude control for small spacecraft with sensor errors. In AIAA SPACE Conferences and Exposition , Pasadena, California, page 4423, August 2015.  Nuno Filipe and Panagiotis Tsiotras. Adaptive position and attitude-tracking controller for satellite proximity operations using dual quaternions. Journal of Guidance, Control, and Dynamics , 38(4):566–577, 2015. doi:10.2514\/1.G000054.  O. A. Bauchau. Flexible Multibody Dynamics . Springer, 2008.  Karsten Grosekathofer and Zizung Yoon. Introduction into quaternions for spacecraft attitude representation. Technical University of Berlin Department of Astronautics and Aeronautics, 2012.  John L. Crassidis and John L. Junkins. Optimal Estimation of Dynamic Systems . Chapman and Hall\/CRC, 2004.  Sebastian Munoz and E. Glenn Lightsey. A sensor driven trade study for autonomous navigation capabilities. AIAA.  John L. Crassidis, F. Landis Markley, and Yang Cheng. Survey of nonlinear attitude estimation methods. Journal of Guidance, Control, and Dynamics , 30(1), 2007.  Bing Liu, Zhen Chen, Xiangdong Liu, and Fan Yang. An efficient nonlinear filter for spacecraft attitude estimation. International Journal of Aerospace Engineering , 2014(540235), 2014.  R. M. Georgevic. The solar radiation pressure forces and torques model. The Journal of the Astronautical Sciences , 27(1), 1973.  Anderson D. Fundamentals of Aerodynamics 4th Edition. McGraw Hill Series, 2007.  Graham Gyatt. The standard atmosphere. A mathematical model of the 1976 U.S. Standard Atmosphere, Jan 2006.  Geographic library c++. https:\/\/geographiclib.sourceforge.io\/. cited Jul 11, 2017.  L. G. Jacchia. Static diffusion models of the upper atmosphere with empirical temperature profiles. Smithson. Astrophys. Obs. Spec. Rept. , (170), 1964. Cambridge, Massachusetts.  L. G. Jacchia. Revised static models of the thermosphere and exosphere with empirical temperature profiles. Smithson. Astrophys. Obs. Spec. Rept. , (332), 1971. Cambridge, Massachusetts.  L. G. Jacchia. Thermospheric temperature, density, and composition: New models. Smithson. Astrophys. Obs. Spec. Rept. , (375), 1977. Cambridge, Massachusetts.  Enhanced magnetic field model. https:\/\/www.ngdc.noaa.gov\/geomag\/EMM\/. cited Jul 11, 2017.  Neil Ashby. The sagnac effect in the global positioning system. Relativity in rotating frames: relativistic physics in rotating reference frames , page 11, 2004. doi:1-4020-1805-3.  Earth gravity model. https:\/\/www.ngdc.noaa.gov\/geomag\/EMM\/. cited Jul 31, 2017.  Chemical propulsion systems. glenn research center — nasa. https:\/\/www1.grc.nasa.gov\/research-and-engineering\/chemical-propulsion-systems\/l-propulsion-systems\/. Retrieved September 29, 2021.  Solid rocket propulsion. https:\/\/engineering.purdue.edu\/ propulsi\/propulsion\/rockets\/solids.html. Retrieved September 29, 2021.  Waslander S.L. Hoffman G.M., Huang H. and Tomlin C.J. Quadrotor helicopter flight dynamics and control: Theory and experiment. AIAA Guidance, Navigation, and Control Conference and Exhibit, pages 6–15, 2007.  H. Huang, G. Hoffman, C. Talor, S. Waslander, and C. Tomlin. Aerodynamics and control of autonomous quadrotor helicopters in aggressive maneuvering. Proc. IEEE Int. Conference of Robotics and Automation (ICRA), pages 3277–3282, May 2009. doi:10.1109\/ROBOT.2009.5152561.  Moosavian S.A.A. Sadr S. and Zarafshan P. Dynamics modeling and control of a quadrotor with swing load. Journal of Robotics, 2014.  Jet Propulsion Laboratory. Solar system dynamics. https:\/\/ssd.jpl.nasa.gov\/ Accessed October 4th, 2019.  Steven C. Chapra and Raymond P. Canale. Numerical Methods for Engineers. McGraw-Hill Education, 7th edition, 2012.  LLC. Horizon Hobby. Eflite Apprentice S 15e Airplane Instruction Manual. Horizon Hobby, LLC., Champaign, IL USA, 1 edition, 4 2016. Retrieved October 5, 2020 https:\/\/www.horizonhobby.com\/on\/demandware.static\/Sites-horizon-us-Site\/Sites-horizon-master\/default\/Manuals\/EFL2725-Apprentice-Manual.pdf.  Maxwell Cobar and Carlos Montalvo. The facility for aerospace systems and technology simulation: Fastsim- an open-source configurable software in the loop simulation environment. In AIAA AVIATION Forum -Chicago, IL, June 2022.  Maxwell Cobar and Carlos Montalvo. Takeoff and landing of a wingtip connected meta aircraft with feedback control. Journal of Aircraft - Q1, 58(4):733–742, 2021.  Maxwell Cobar and Carlos Montalvo (Chair). Waypoint control for a wingtip connected meta aircraft, December 2022.  Stephen M. Stigler. Gauss and the invention of least squares. doi:10.1214\/aos\/1176345451.  Lagrange, J. L. (Joseph Louis). Mécanique analytique. Paris, Ve Courcier, 1, 1811.  A. B. Younes, D. Mortari, J. D. Turner, and J. L. Junkins. Attitude error kinematics. Journal of Guidance, Control and Dynamics, 37(1), 2014  S. Caldwell. Ground data systems and mission operations. nasa. http:\/\/www.nasa.gov\/smallsat-institute\/sst-soa\/ground-data-systems-and-mission-operations. Accessed Nov. 4, 2021.  H. Monaghan. Networks. nasa. http:\/\/www.nasa.gov\/directorates\/heo\/scan\/services\/networks\/index.html.Accessed Nov. 4, 2021.  AmericaSpace. Happy birthday, dsn: Nasa’s iconic deep space communications network turns 50. https:\/\/www.americaspace.com\/2013\/12\/26\/happy-birthday-dsn-nasas-iconic-deep-space-communications-network-turns-50\/. Accessed Nov. 4, 2021.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
