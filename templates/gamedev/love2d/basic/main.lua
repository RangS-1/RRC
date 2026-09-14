_G.love = require("love")

function love.load()
    player = {}
    player.x = 100
    player.y = 100
end

function love.update(dt)
    speed = 100
    if love.keyboard.isDown("right") or love.keyboard.isDown("d") then
        player.x = player.x + speed
    end
    
    if love.keyboard.isDown("left") or love.keyboard.isDown("a") then
        player.x = player.x - speed
    end
    
    if love.keyboard.isDown("up") or love.keyboard.isDown("w") then
        player.y = player.y - speed
    end

    if love.keyboard.isDown("down") or love.keyboard.isDown("s") then
        player.y = player.y + speed
    end
end

function love.draw()
    player_sprite = love.graphics.circle("fill", player.x, player.y, 25)
end