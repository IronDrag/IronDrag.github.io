export const sectionContact = {
  name: 'sectionContact',
  template: `<section id="Contact">
    <div class="wrap">
        <h2>Contact</h2>
        <div class="Contact-form__thx" v-if="gfThx">Thanks for filling out the contact form</div>
        <form class="Contact-form gform" @submit="submitForm" action="https://docs.google.com/forms/d/e/1FAIpQLSfN--Lqa4pyV6veTMT3L3ay7JF3jg7N6mR2O35pI9H5qY8XuA/formResponse?embedded=true" method="POST" target="hidden_iframe">        
            <div class="Contact-form__name">
                <label for="gfrm_name">Name: </label>
                <div><input id="gfrm_name" type="text" name="entry.646620276" placeholder="John Doe" required></div>
            </div>
            <div class="Contact-form__email">
                <label for="gfrm_eml">E-mail: </label>
                <div><input id="gfrm_eml" type="email" name="emailAddress" placeholder="example@mail.com" required></div>
            </div>
            <div class="Contact-form__subject">
                <label for="gfrm_sbjt">Letter subject: </label>
                <div>
                    <select id="gfrm_sbjt" required name="entry.22642542">
                        <option value="Web-dev">Web-dev</option>
                        <option value="Programming">Programming</option>
                        <option value="Design">Design</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="Contact-form__message">           
                <label for="gfrm_msg">Message: </label>
                <div><textarea id="gfrm_msg" name="entry.1283908172" placeholder="What do you want?" rows="3"></textarea></div>
            </div>
            <div class="Contact-form__controls">
                <button type="submit">Submit</button> <button class="Contact-form__clear" type="reset">Clear form</button> <a href="mailto:info.irondragon@gmail.com">info.irondragon@gmail.com</a>    
            </div>
        </form>
  
        <iframe id="hidden_iframe" name="hidden_iframe" style="display:none;" @load="loadForm"></iframe>
    </div><div class="Contact__map">
    </div>
  </section>`,
};
