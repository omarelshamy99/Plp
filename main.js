
            // Implement a function to disable all buttons of a question of one of its buttons is clicked
            function disable(className){
                let buttons = document.querySelectorAll('.' + className);
                for (let i = 0; i < buttons.length; i++) 
                {
                    buttons[i].disabled = true;
                }
            };
            // Initiate a counter to increment the number of correct answers
            let counter = 0;

            // Run the java script only when the page is loaded
            document.addEventListener('DOMContentLoaded', function() {
                
            // Make a class to sort all the correct answers in one group together
                let corrects = document.querySelectorAll(".correct");
                
                // When each correct answer is clicked, turn its background into green, update feedback to correct and increment counter
                for (let i = 0; i < corrects.length; i++) {
                    corrects[i].addEventListener('click', function(){
                        corrects[i].style.backgroundColor = 'green';
                        document.querySelector("#feedback1").innerHTML = 'Correct';
                        disable(corrects[i].classList[0]);
                        counter++;
                        document.querySelector(".counter").innerHTML = counter.toString();
                    });
                }
                
                // When each incorrect answer is clicked, trun its background into red, update feedback to incorrect
                let incorrects = document.querySelectorAll(".incorrect");
                for (let i = 0; i < incorrects.length; i++) {
                    incorrects[i].addEventListener('click', function() {
                        incorrects[i].style.backgroundColor = 'red';
                        document.querySelector("#feedback1").innerHTML = 'Incorrect!';
                        disable(incorrects[i].classList[0]);
                    });
                }

                // When the correct answer for the free-response question is entered, tuun its background into green, update feedback to correct and increment counter
                let checks = document.querySelectorAll(".check");
                for (let i = 0; i < checks.length; i++) {
                    checks[i].addEventListener('click', function() {
                        let input = document.querySelector('input');
                        if (input.value == 'Ronaldo') {
                            input.style.backgroundColor = 'green';
                            document.querySelector("#feedback2").innerHTML = 'Correct';
                            counter++;
                            document.querySelector(".counter").innerHTML = counter.toString();
                        }
                        // If any other answer is inserted, then turn background to red and display "incorrect"
                        else {
                            input.style.backgroundColor = 'red';
                            document.querySelector("#feedback2").innerHTML = 'Incorrect';
                        }
                        disable(checks[i].classList[0]);
                    });
                }
            }) 