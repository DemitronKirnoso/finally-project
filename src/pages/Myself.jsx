import { Button, Chip } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import JsImg from "../assets/js.png"

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

const Myself = () => {
    return (
        <div>
            <div>
                
            </div>
<div className='w-[400px] flex flex-wrap gap-[10px]'>
            
            <Tooltip title="JavaScript
Язык программирования, на котором пишут веб-приложения." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black"}}>
<img src={JsImg} alt=""  className='h-5 rounded-[2px]'/>
JavaScript


                </Button>
            </Tooltip>
            <Tooltip title="Локальный сервер для разработки приложений на Vue. Поддерживает TypeScript и JSX." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black"}}>
<img src="https://chris-ayers.com/assets/images/vscode-logo.png" alt=""  className='h-5'/>
VS Code


                </Button>
            </Tooltip>
            <Tooltip title="Локальный сервер для разработки приложений на Vue. Поддерживает TypeScript и JSX." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black"}}>


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt=""  className='h-5'/>
React

                </Button>
            </Tooltip>
            <Tooltip title="Локальный сервер для разработки приложений на Vue. Поддерживает TypeScript и JSX." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" alt=""  className='h-5'/>
Vite

                </Button>
            </Tooltip>
            <Tooltip title="Язык, с помощью которого можно разметить структуру будущей веб-страницы: добавить основные блоки, текст, картинки, видео." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt=""  className='h-5'/>
html
                </Button>
            </Tooltip>
            <Tooltip title="Язык стилей, с помощью которого можно описать внешний вид HTML-элементов." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="https://248006.selcdn.ru/LandGen/46698/CSS.svg" alt=""  className='h-5 rounded-[2px]'/>
css
                </Button>
            </Tooltip>
            <Tooltip title="Сервис, в котором дизайнеры проектируют интерфейсы сайтов и мобильных приложений." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="https://248006.selcdn.ru/LandGen/46899/Figma.svg" alt=""  className='h-5 rounded-[2px]'/>
figma
                </Button>
            </Tooltip>
            <Tooltip title="это популярная библиотека компонентов для React, реализующая дизайн-систему Material Design от Google. Она предоставляет готовые стилизованные компоненты (кнопки, формы, таблицы и др.), упрощая создание современных и адаптивных пользовательских интерфейсов." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEwAf/8Af/8Af/8Af/8Af/8Af/8Af/8Af/8AgP8Af/8Af/8Af/8Af/8Af/8Af/86kkgXAAAAEHRSTlMAE6ElfE8w/48GsfBl3cpAzToGrwAAAKBJREFUeAGlxyEMAWEYx+EfR7iN7abPND0JNs1U/YpENeXvjlNVTU/XTFOv99GTqiv2fu/m+u5pD40MEkw0gjmw2dviMmO6s+oILJRx9upJKuveq5tCl3gVCqHdh4p1XTqqImvs5YK1t8NL6LhuqozSOrHOpK03ekFbyhMvLbiqWME7FOsdvqqbJ0PpiOtLuXRKwKWSDh/+FlJFLS5HNPQD5C4+Qq11NNEAAAAASUVORK5CYII=" alt=""  className='h-5'/>
mui
                </Button>
            </Tooltip>
            <Tooltip title="это фреймворк, который предлагает готовые CSS-классы для быстрого и удобного стилирования интерфейсов прямо в HTML." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC" alt=""  className='h-5 rounded-[2pz'/>
tailwind
                </Button>
            </Tooltip>
            <Tooltip title=" это мощный и гибкий слайдер (carousel) для веб-сайтов и мобильных приложений с поддержкой жестов, адаптивностью и множеством настроек." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAMFBMVEVHcEwAgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP8AgP+7essUAAAAD3RSTlMAIxHmUNg2aLmZw/V/zK0yygYzAAAA2UlEQVQokWWSWQLEIAhDwQ3Xev/bDnZcwOZLfRVSDMCWS7G1mJyBWxj7VAo3eybJg4SUBDLljzwOMlZ21zbzWuW+dlVfcN4jML5v2T+bVjJgl3r7hrlxYBXsbADaXmvW43HzvcmeaC3zbnA+f8SaNEwg3CM4BbNqhIBFbL12QSAreblhPSC+zsLQq3j+jQ3Vy389J3QNlHVODHzmYtYY24iOZmUP6o2L9ovnCWUQhjgeq9JMwh54ofMQCIpmx1XazfjMZxrhXRNpd3QNLWfWfTIfarSl+FhPxR9s/R6nMgnTLwAAAABJRU5ErkJggg==" alt=""  className='h-5'/>
swiper
                </Button>
            </Tooltip>
            <Tooltip title="GitHub — это платформа для хранения и совместной разработки кода, основанная на системе контроля версий Git." placement='top'>
                <Button variant='outlined' sx={{display:"flex", bgcolor:"#f5f5f5", color:"black" }}>


<img src="https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png" alt=""  className='h-5'/>
github
                </Button>
            </Tooltip>
        </div>
        </div>
    )
}

export default Myself