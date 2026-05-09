import { reactive } from 'vue';
import { seedData } from '../data/seed';


export const store = reactive({

                               days: seedData,

                               showModal: false,
                             
                               getActiveDay() {
                             
                                                return this.days.find(day => day.active);
                             
                                              },
                             
                               setActiveDay(dayId) {
                             
                                                    this.days.forEach(day => {
                             
                                                                               if(day.id == dayId){

                                                                                                    day.active = true;

                                                                                                  }
                                                                                                  else{

                                                                                                       day.active = false;

                                                                                                      }
                             
                                                                              }
                                                                            
                                                                      );
                             
                                                  },

                               deactivateDay() {

                                                this.days.forEach(

                                                                   day => {
                                                                          
                                                                           day.active = false;
                                                                                          
                                                                          }

                                                                  );

                                                    },
                             
                               submitEvent(eventDetails) {
                             
                                                          const activeDay = this.getActiveDay();
                             
                                                          activeDay.events.push({
                             
                                                                                 details: eventDetails,
                                                                                
                                                                                 edit: false
                             
                                                                                });

                                                          this.deactivateDay();
                             
                               },

                               editEvent(dayId, eventDetails) {

                                                               this.resetEditOfAllEvents();
                                                             
                                                               const dayObj = this.days.find(
                                                             
                                                                 day => day.id === dayId
                                                             
                                                               );
                                                             
                                                               const eventObj = dayObj.events.find(
                                                             
                                                                 event => event.details === eventDetails
                                                             
                                                               );
                                                             
                                                               eventObj.edit = true;
                                                             
                                                              },

                               resetEditOfAllEvents() {
                               
                                                        this.days.forEach(day => {
                                                      
                                                                                   day.events.forEach(event => {
                                                      
                                                                                                                event.edit = false;
                                                      
                                                                                                               });
                                                      
                                                                                  }
                                                                                
                                                                          );
                                                      
                                                      },

                               updateEvent(dayId, originalDetails, updatedDetails) {
                                                             
                                                                                     const dayObj = this.days.find(
                                                                                   
                                                                                                                   day => day.id === dayId
                                                                                   
                                                                                                                  );
                                                                                   
                                                                                     const eventObj = dayObj.events.find(
                                                                                   
                                                                                                                          event => event.details === originalDetails
                                                                                            
                                                                                                                        );
                                                                                   
                                                                                     eventObj.details = updatedDetails;
                                                                                   
                                                                                     eventObj.edit = false;
                                                                                   
                                                                                   },

                               deleteEvent(dayId, eventDetails) {
                               
                                                                 const dayObj = this.days.find(
                                                              
                                                                                                day => day.id === dayId
                                                              
                                                                                              );
                                                              
                                                                 dayObj.events = dayObj.events.filter(
                                                              
                                                                                                      event => event.details !== eventDetails
                                                              
                                                                                                     );
                                                              
                                                               },

                               closeModel(){

                                 this.showModal = false;

                               },

                            });