        const schedule = {
            day1: {
                title: 'Programação - 15 de Setembro (Segunda-feira)',
                activities: [
                    { time: '08h00-09h00', event: 'Recepção e credenciamento', local: 'Entrada do CMN' },
                    { time: '09h00-09h30', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '09h30-10h00', event: 'Palavras do Cmt CMN', local: 'Auditório' },
                    { time: '10h00-10h10', event: 'Cerimônia de Abertura', local: 'Auditório do CMN (VC ESD)' },
                    { time: '10h10-10h20', event: 'Cerimônia de Abertura', local: 'Auditório do CMN (VC ESD)' },
                    { time: '10h20-11h20', event: 'Palestra de abertura', local: 'Auditório do CMN (VC ESD)' },
                    { time: '11h20-11h40', event: 'Intervalo', local: 'Livre' },
                    { time: '11h40-12h10', event: 'Informações Administrativas', local: 'Auditório do CMN' },
                    { 
                        time: '12h10-13h30', 
                        event: 'Almoço', 
                        local: 'Livre',
                        image: 'img/almoco-local.jpg'
                    },
                    { time: '13h30-14h40', event: 'Treinamento do Exercício', local: 'Auditório do CMN' },
                    { time: '14h40-15h00', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '15h00-17h00', event: 'Treinamento do Exercício', local: 'Auditório do CMN' },
                    { time: '17h00', event: 'Encerramento da 1ª Jornada', local: 'Auditório do CMN' }
                ]
            },
            day2: {
                title: 'Programação - 16 de Setembro (Terça-feira)',
                activities: [
                    { time: '08h00-09h00', event: 'Recepção dos participantes', local: 'Entrada do CMN' },
                    { time: '09h00-10h30', event: 'Simulação Construtiva e Virtual', local: 'Auditório do CMN, CCOP, 8° GPT Log' },
                    { time: '10h30-10h50', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '10h50-12h00', event: 'Execução do Exercício (situação de normalidade)', local: 'Diversas salas' },
                    { 
                        time: '12h00-13h30', 
                        event: 'Almoço', 
                        local: 'Livre',
                        image: 'img/almoco-local.jpg'
                    },
                    { time: '13h30-15h30', event: 'Execução do Exercício (situação de normalidade)', local: 'Diversas salas' },
                    { time: '15h30-15h50', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '15h50-17h00', event: 'Simulação Construtiva e Virtual - Feedback', local: 'Auditório do CMN e Sala da Simulação Virtual' },
                    { time: '17h00', event: 'Encerramento da 2ª Jornada', local: 'Auditório do CMN' }
                ]
            },
            day3: {
                title: 'Programação - 17 de Setembro (Quarta-feira)',
                activities: [
                    { time: '08h00-09h00', event: 'Recepção dos participantes', local: 'Entrada do CMN' },
                    { time: '09h00-10h30', event: 'Execução do Exercício (agravamento da crise)', local: 'Diversas salas' },
                    { time: '10h30-10h50', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '10h50-12h00', event: 'Execução do Exercício (agravamento da crise)', local: 'Diversas salas' },
                    { 
                        time: '12h00-13h30', 
                        event: 'Almoço', 
                        local: 'Livre',
                        image: 'img/almoco-local.jpg'
                    },
                    { time: '13h30-15h30', event: 'Execução do Exercício (agravamento da crise)', local: 'Diversas salas' },
                    { time: '15h30-15h50', event: 'Coffee Break', local: 'Área externa do Auditório do CMN' },
                    { time: '15h50-17h00', event: 'Feedback dos Gabinetes de Crise', local: 'Auditório do CMN' },
                    { time: '15h50-17h00', event: 'Feedback das ações do ambiente virtual', local: 'Sala da Simulação Virtual' },
                    { time: '17h00', event: 'Encerramento da 3ª Jornada', local: 'Auditório do CMN' }
                ]
            },
            day4: {
                title: 'Local do Almoço',
               activities: [
                    {image: 'img/almoco-local.jpg'}
                ]           
            }
        };
        const modalContainer = document.getElementById('modal-container');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        function openModal(day) {
            const data = schedule[day];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalBody.innerHTML = ''; 

            const table = document.createElement('table');
            table.className = 'min-w-full divide-y divide-gray-700';
            table.innerHTML = `<thead class="bg-gray-700"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Hora</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Atividade</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Local</th></tr></thead><tbody class="divide-y divide-gray-700"></tbody>`;
            const tbody = table.querySelector('tbody');

            data.activities.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">${item.time}</td><td class="px-6 py-4 text-sm text-gray-400">${item.event}</td><td class="px-6 py-4 text-sm text-gray-400">${item.local}</td>`;
                tbody.appendChild(row);
            });

            modalBody.appendChild(table);
            modalContainer.classList.remove('hidden');
        }

        function closeModal() {
            modalContainer.classList.add('hidden');
        }

        window.addEventListener('unhandledrejection', function(event) {
            console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
        });

        let src =   'img/almoco-local.jpg';  
        function showImage(src) {
            // Cria um popup modal para mostrar a imagem na frente da página
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';

            const popup = document.createElement('div');
            popup.style.position = 'relative';
            popup.style.background = '#222';
            popup.style.padding = '16px';
            popup.style.borderRadius = '8px';
            popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5)';
            popup.style.maxWidth = '90vw';
            popup.style.maxHeight = '90vh';

            const img = document.createElement('img');
            img.src = src;
            img.style.maxWidth = '80vw';
            img.style.maxHeight = '80vh';
            img.style.display = 'block';

            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Fechar';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '8px';
            closeBtn.style.right = '8px';
            closeBtn.style.background = '#444';
            closeBtn.style.color = '#fff';
            closeBtn.style.border = 'none';
            closeBtn.style.padding = '8px 12px';
            closeBtn.style.borderRadius = '4px';
            closeBtn.style.cursor = 'pointer';

            closeBtn.onclick = () => document.body.removeChild(overlay);

            popup.appendChild(img);
            popup.appendChild(closeBtn);
            overlay.appendChild(popup);
            document.body.appendChild(overlay);
        }