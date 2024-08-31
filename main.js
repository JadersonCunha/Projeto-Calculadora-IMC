const firstDiv = document.querySelector('.firts-step')
const secondDiv = document.querySelector('.second-step')
const finalDiv = document.querySelector('.final-step')
function go(currentStep,nextStep)
{
    let dNone,dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }

    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }

    else
    { 
        dNone = finalDiv;
    }   

    dNone.style.display = 'none';


if(nextStep == 1)
    {
        dBlock = firstDiv;
    }

    else if(nextStep == 2)
        
    {
        dBlock = secondDiv;
    }

    else
    { 
        dBlock = finalDiv;
    }    
        dBlock.style.display = 'block';
}


function validate()
{
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.borde = 'none';
    altura.style.borde = 'none';
    if(!peso.value || !altura.value)
{
    if(!peso.value && !altura.value)
    {
        peso.style.border = '1px solid red';
        altura.style.border = '1px solid red'; 
    }   
    else if(!peso.value)
    {
        peso.style.border = '1px solid red';
    }

    else
    {
        altura.style.border = '1px solid red';
    }

}    
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        if(imc < 18.5)
        {
            console.log('Magreza | Obesidade: 0');
            result.innerHTML = 'Magreza | Obesidade: 0';
            result.style.color = 'yellow';
        }

        else if(imc >= 18.5 && imc < 25)
        {
            console.log('Normal | Obesidade: 0');
            result.innerHTML = 'Normal | Obesidade: 0';
            result.style.color = 'Green';


        }
        else if(imc >= 25 && imc < 30)
        {
            console.log('Sobrepeso | Obesidade: I');
            result.innerHTML = 'Sobrepeso | Obesidade: I';
            result.style.color = 'Yellow';


        } 
        else if(imc >= 30 && imc< 40)
        {
            console.log('Sobrepeso | Obesidade: II');
            result.innerHTML = 'Sobrepeso | Obesidade: II';
            result.style.color = 'Red';


        }
        else
        {
            console.log('Obesidade grave | Obesidade: III');
            result.innerHTML = 'Obesidade grave | Obesidade: III';
            result.style.color = 'black';

        }
        go(2,3);
    }
    
}

 

